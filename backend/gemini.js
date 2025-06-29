// app.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const multer = require('multer'); // For handling file uploads
const pdfParse = require('pdf-parse'); // For parsing PDF text
const { GoogleGenerativeAI } = require('@google/genai');

const app = express();
const port = 3000;

// Configure Multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Store the file in memory as a Buffer
  limits: {
    fileSize: 20 * 1024 * 1024, // 20 MB limit for PDF upload to Node.js server
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'), false);
    }
  },
});

// Initialize Gemini API
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("Error: API_KEY not found in .env file. Please set it.");
  process.exit(1); // Exit the process if API key is missing
}

const genAI = new GoogleGenerativeAI(API_KEY);
// For text-only input (after parsing PDF), use the gemini-pro model
const textOnlyModel = genAI.getGenerativeModel({ model: "gemini-pro" });

/**
 * Express route handler to analyze a PDF for sustainability development and SDGs.
 * This version uses pdf-parse to extract text first, then sends text to Gemini-Pro.
 *
 * POST /analyze-pdf-text
 * File: A PDF file (named 'pdfFile')
 * Body (JSON):
 * {
 * "sectorName": "Technology",
 * "companyName": "TechCorp",
 * "financialYear": "2023"
 * }
 */
app.post('/analyze-pdf-text', upload.single('pdfFile'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No PDF file uploaded.' });
  }

  const { sectorName, companyName, financialYear } = req.body;

  if (!sectorName || !companyName || !financialYear) {
    return res.status(400).json({ error: 'sectorName, companyName, and financialYear are required in the request body.' });
  }

  const pdfBuffer = req.file.buffer; // The uploaded PDF as a Buffer

  let extractedText = '';
  try {
    const data = await pdfParse(pdfBuffer);
    extractedText = data.text;
    if (!extractedText || extractedText.trim() === '') {
        return res.status(400).json({ error: 'Could not extract meaningful text from the PDF. It might be an image-only PDF or empty.' });
    }
    console.log(`Successfully extracted ${extractedText.length} characters from PDF.`);
  } catch (pdfParseError) {
    console.error('Error parsing PDF:', pdfParseError);
    return res.status(500).json({
      success: false,
      error: 'Failed to extract text from PDF.',
      details: pdfParseError.message,
    });
  }

  const UN_SDG_GOALS = [
    "No Poverty", "Zero Hunger", "Good Health and Well-being",
    "Quality Education", "Gender Equality", "Clean Water and Sanitation",
    "Affordable and Clean Energy", "Decent Work and Economic Growth",
    "Industry, Innovation, and Infrastructure", "Reduced Inequalities",
    "Sustainable Cities and Communities", "Responsible Consumption and Production",
    "Climate Action", "Life Below Water", "Life on Land",
    "Peace, Justice, and Strong Institutions", "Partnerships for the Goals"
  ];

  // Craft the prompt using the extracted text
  const prompt = `
    Analyze the provided document text. Extract and summarize information related to sustainability development,
    and provide a separate summarized text for each of the 17 United Nations Sustainable Development Goals (SDGs)
    that are mentioned or clearly addressed within the document.

    **General Summary Requirements:**
    * Provide a concise, overall summary of sustainability development.
    * Include all relevant numerical data (e.g., percentages, capacities, beneficiaries, target years, satisfaction scores).
    * Ensure no critical data points are lost, even while keeping the summary shorter than the original text.

    **SDG Goal Summaries Requirements:**
    * For each of the 17 SDGs, if it is mentioned or clearly addressed, provide a concise summary of the related content from the document.
    * The SDGs are: ${UN_SDG_GOALS.map((name, i) => `SDG ${i+1}: ${name}`).join(', ')}.
    * If an SDG is not explicitly mentioned or clearly addressed, you MUST omit it from the output.
    * Present these SDG summaries as key-value pairs, where the key is the 'SDG Number: SDG Name' and the value is the summarized text.

    **Output Format:**
    Return the information STRICTLY in a JSON object with the following nested structure.
    Ensure the JSON is perfectly valid and ready for direct parsing. Do NOT include any
    markdown code blocks (e.g., \`\`\`json) outside the JSON itself.
    The keys "{{Sector_Name}}", "{{Company_Name}}", and "{{Financial_Year}}"
    should be replaced with the actual values provided for this request.

    \`\`\`json
    {
      "${sectorName}": {
        "${companyName}": {
          "${financialYear}": {
            "general_summary": "...",
            "summary_wrt_sdg_goals": {
              "SDG 1: No Poverty": "...",
              "SDG 2: Zero Hunger": "...",
              // ... and so on for other relevant SDGs, ONLY if addressed
            }
          }
        }
      }
    }
    \`\`\`

    Focus on extracting factual information, numerical data, and direct mentions of activities
    related to sustainability and SDGs. Be precise and avoid conversational filler.
    If a numerical data point is present, include it.

    ---
    **Document Text for Analysis:**
    ${extractedText}
    ---
  `;

  try {
    const result = await textOnlyModel.generateContent(prompt);

    if (!result || !result.response) {
      throw new Error('Gemini API did not return a valid response structure.');
    }

    const textResponse = result.response.text();
    console.log("Raw Gemini Response:", textResponse); // Log for debugging

    let parsedData;
    try {
      // Clean the response if it contains markdown code block delimiters
      const cleanedTextResponse = textResponse.replace(/```json\s*|```/g, '').trim();
      parsedData = JSON.parse(cleanedTextResponse);
    } catch (jsonError) {
      console.error('Failed to parse Gemini response as JSON:', jsonError);
      console.error('Problematic response text:', textResponse); // Log the problematic text
      return res.status(500).json({
        success: false,
        error: 'Gemini API returned unparsable JSON. Please check server logs for raw response.',
        details: jsonError.message,
        geminiRawResponse: textResponse // Send raw response for client-side debugging
      });
    }

    // Since the prompt asks for specific dynamic keys, Gemini might return them.
    // However, LLMs can be inconsistent. We'll attempt to extract the core content
    // assuming the structure requested in the prompt.
    // This part assumes Gemini adhered to the requested sector/company/year keys.
    if (parsedData[sectorName] && parsedData[sectorName][companyName] && parsedData[sectorName][companyName][financialYear]) {
        res.json(parsedData); // Send the parsed data directly if it matches the expected structure
    } else {
        // If Gemini didn't exactly match the top-level dynamic keys,
        // we'll try to find the innermost content and wrap it with the correct keys.
        // This makes the response more robust against slight LLM variations.
        let innerContent = parsedData;
        while(typeof innerContent === 'object' && !Array.isArray(innerContent) && Object.keys(innerContent).length === 1 &&
              (Object.values(innerContent)[0] && typeof Object.values(innerContent)[0] === 'object')) {
            innerContent = Object.values(innerContent)[0];
        }

        const finalOutput = {
            [sectorName]: {
                [companyName]: {
                    [financialYear]: innerContent
                }
            }
        };
        res.json(finalOutput);
    }

  } catch (error) {
    console.error('Error analyzing document with Gemini API:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to analyze document with Gemini API.',
      details: error.message
    });
  }
});

// Basic root route


