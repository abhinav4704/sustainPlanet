// app.js
// Main application file that sets up the Express server and defines the RAG endpoint.

const express = require('express');
const bodyParser = require('body-parser');
const { connectDB, retrieveDocuments } = require('./db'); // db.js now uses Mongoose
const { generateAnswer } = require('./llm');
const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Connect to MongoDB when the application starts
connectDB();

/**
 * @route POST /rag
 * @description Handles RAG requests with a fallback mechanism.
 * - First attempts to retrieve relevant documents from the 'summary' collection.
 * - If documents are found, it uses them as context for the LLM.
 * - If no documents are found in 'summary', it falls back to the LLM's general knowledge.
 * @param {object} req.body - The request body containing the 'query' string.
 * @returns {object} JSON response with the generated 'answer' and a flag indicating if 'summary' was used.
 */
app.post('/rag', async (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Query is required in the request body.' });
    }

    try {
        console.log(`Received query: "${query}"`);

        let answer;
        let retrievedFromSummary = false;
        let relevantDocuments = [];

        // Step 1: Attempt to retrieve from the 'summary' collection first
        console.log('Attempting to retrieve from "summary" collection for RAG...');
        // Pass 'summary' as the collection name to retrieveDocuments
        relevantDocuments = await retrieveDocuments(query, 'Summary'); // Use model name 'Summary' here

        if (relevantDocuments.length > 0) {
            retrievedFromSummary = true;
            console.log(`Retrieved ${relevantDocuments.length} documents from 'summary' collection.`);
            // If documents found in 'summary', use them for RAG
            answer = await generateAnswer(query, relevantDocuments);
            console.log('LLM generated answer using "summary" context.');
        } else {
            // Step 2: If no relevant documents in 'summary', use general purpose LLM
            console.log('No relevant documents found in "summary" collection. Falling back to general LLM knowledge.');
            // Pass an empty array to generateAnswer, which triggers the general knowledge prompt
            answer = await generateAnswer(query, []);
            console.log('LLM generated answer using general knowledge.');
        }

        // Return the answer and indicate if context from 'summary' was used
        res.json({ answer, retrievedFromSummary });
    } catch (error) {
        console.error('Error during RAG process:', error);
        res.status(500).json({ error: 'Failed to generate answer.', details: error.message });
    }
});

// Basic health check endpoint
app.get('/', (req, res) => {
    res.send('RAG Node.js application is running!');
});

// Start the Express server
app.listen(port, () => {
    console.log(`RAG Node.js server listening at http://localhost:${port}`);
    console.log(`MongoDB URI: ${config.MONGODB_URI.split('@')[1] ? '***' + config.MONGODB_URI.split('@')[1].slice(-20) : '***'}`); // Mask sensitive parts
    console.log(`Gemini API Key: ${config.GEMINI_API_KEY ? '*****' + config.GEMINI_API_KEY.slice(-5) : 'Not configured'}`); // Mask key
});


// config.js
// Configuration file for environment variables and API keys.

// Replace with your MongoDB connection string.
// Example: "mongodb://localhost:27017/ragdb" or "mongodb+srv://user:password@cluster.mongodb.net/ragdb"
exports.MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ragdb";

// Replace with your actual Google Gemini API Key.
// You can get one from Google AI Studio: https://aistudio.google.com/app/apikey
exports.GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";


// db.js
// Handles MongoDB connection and data retrieval logic using Mongoose.

const mongoose = require('mongoose');
const config = require('./config');

// Define a Mongoose Schema for the documents
const summarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
}, { collection: 'summary' }); // Explicitly set collection name

// Create a Mongoose Model from the schema
const Summary = mongoose.model('Summary', summarySchema);

/**
 * Connects to the MongoDB database using Mongoose. This connection is established once
 * and reused for all subsequent database operations.
 * @returns {Promise<void>} A promise that resolves when the connection is successful.
 */
async function connectDB() {
    try {
        await mongoose.connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Additional options if needed, e.g., replicaSet, authSource
        });
        console.log('Successfully connected to MongoDB with Mongoose!');

        // Listen for Mongoose connection events
        mongoose.connection.on('error', err => {
            console.error('Mongoose connection error:', err);
        });
        mongoose.connection.on('disconnected', () => {
            console.warn('Mongoose disconnected from MongoDB!');
        });

    } catch (error) {
        console.error('Failed to connect to MongoDB with Mongoose:', error);
        process.exit(1); // Exit the process if unable to connect
    }
}

/**
 * Retrieves documents from a specified Mongoose model/collection based on a keyword search.
 * @param {string} query - The user's query string.
 * @param {string} modelName - The name of the Mongoose model to search (e.g., 'Summary').
 * @returns {Promise<Array<object>>} A promise that resolves with an array of relevant documents.
 */
async function retrieveDocuments(query, modelName) {
    if (mongoose.connection.readyState !== 1) { // 1 means connected
        throw new Error('Database not connected. Call connectDB() first.');
    }

    const Model = mongoose.models[modelName];
    if (!Model) {
        throw new Error(`Mongoose model '${modelName}' not found.`);
    }

    const keywords = query.split(' ').filter(word => word.length > 2);

    if (keywords.length === 0) {
        return [];
    }

    const searchRegex = new RegExp(keywords.join('|'), 'i');

    // Use the Mongoose model to find documents
    const documents = await Model.find({
        $or: [
            { content: { $regex: searchRegex } },
            { title: { $regex: searchRegex } }
        ]
    }).limit(5).lean(); // .lean() returns plain JavaScript objects instead of Mongoose documents

    return documents;
}

module.exports = {
    connectDB,
    retrieveDocuments,
    Summary // Export the model for use in seed.js if needed directly
};


// llm.js
// Handles interaction with the Gemini LLM API.

const config = require('./config');
const fetch = require('node-fetch'); // node-fetch is needed for fetch API in Node.js

/**
 * Generates an answer using the Gemini LLM.
 * If retrievedDocuments are provided, they are used as context (RAG mode).
 * If no documents are provided, the LLM uses its general knowledge.
 * @param {string} userQuery - The original query from the user.
 * @param {Array<object>} retrievedDocuments - An array of documents retrieved from MongoDB (can be empty).
 * @returns {Promise<string>} A promise that resolves with the generated answer.
 */
async function generateAnswer(userQuery, retrievedDocuments) {
    if (!config.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not configured in config.js or environment variables.");
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${config.GEMINI_API_KEY}`;

    // Construct the prompt for the LLM based on whether context is available
    let systemInstruction = "";
    if (retrievedDocuments && retrievedDocuments.length > 0) {
        const contextDocs = retrievedDocuments.map((doc, index) =>
            `Document ${index + 1} (Title: ${doc.title || 'N/A'}):\n${doc.content || 'N/A'}`
        ).join('\n\n');
        systemInstruction = `Based ONLY on the following information, answer the user's question. If the information is not sufficient to fully answer, clearly state that you cannot answer based on the provided context.\n\n${contextDocs}\n\n`;
    } else {
        systemInstruction = "No specific documents were provided as context. Please answer the user's question based on your general knowledge. If you do not know the answer, state that you are unable to provide it.\n\n";
    }

    const prompt = `${systemInstruction}User's Question: ${userQuery}\n\nAnswer:`;

    const chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const payload = {
        contents: chatHistory,
        generationConfig: {
            temperature: 0.7, // Adjust for creativity vs. factualness
            maxOutputTokens: 500,
        },
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            return text;
        } else {
            console.error('Unexpected LLM response structure:', JSON.stringify(result, null, 2));
            return "I could not generate an answer due to an unexpected response from the language model.";
        }
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        throw new Error(`Failed to communicate with the LLM: ${error.message}`);
    }
}

module.exports = {
    generateAnswer
};


// seed.js
// Utility script to populate the MongoDB 'summary' collection with sample data using Mongoose.

const mongoose = require('mongoose');
const config = require('./config');
const { Summary } = require('./db'); // Import the Summary model from db.js

async function seedDatabase() {
    try {
        // Connect using Mongoose
        await mongoose.connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to MongoDB with Mongoose for seeding!');

        // Clear existing data from the 'summary' collection using the Mongoose model
        await Summary.deleteMany({});
        console.log('Cleared existing documents from the "summary" collection.');

        const documentsToInsert = [
            {
                title: "Summary of Project A",
                content: "Project A was a groundbreaking initiative focused on developing a new renewable energy source. It involved extensive research into solar panel efficiency and battery storage solutions. Key outcomes included a 15% increase in energy conversion rates and the successful pilot deployment of a grid-scale battery system. The project concluded in Q3 2024 with promising results for future commercialization."
            },
            {
                title: "Summary of Company B's Q1 Financials",
                content: "Company B reported strong financial performance in Q1 2025, with revenue up 20% year-over-year, reaching $50 million. Net profit increased by 15%, driven by successful product launches in the tech sector. The company's expansion into new markets contributed significantly to growth, exceeding analyst expectations. Operating expenses remained stable."
            },
            {
                title: "Key Milestones for Product X Launch",
                content: "The launch of Product X is scheduled for Q4 2025. Key milestones achieved include completion of beta testing by end of Q2, finalization of marketing materials in Q3, and securing all regulatory approvals by October. The product aims to revolutionize personal computing with its advanced AI capabilities and extended battery life."
            },
            {
                title: "Research on Climate Change Impacts",
                content: "Recent research highlights accelerating climate change impacts, including rising global temperatures, more frequent extreme weather events, and sea-level rise. Studies indicate that greenhouse gas emissions from industrial activities are the primary driver. Mitigation efforts focus on transitioning to clean energy and carbon capture technologies."
            },
            {
                title: "Overview of Healthcare Trends 2025",
                content: "Healthcare in 2025 is characterized by a strong emphasis on personalized medicine, digital health integration, and preventative care. Telemedicine continues to expand, and AI-driven diagnostics are becoming more prevalent. Investment in mental health services is also seeing significant growth across developed nations."
            }
        ];

        // Insert new documents using the Mongoose model
        const result = await Summary.insertMany(documentsToInsert);
        console.log(`Inserted ${result.insertedCount} documents into the 'summary' collection.`);
    } catch (error) {
        console.error('Error seeding database with Mongoose:', error);
    } finally {
        // Ensure the Mongoose connection is closed after seeding
        await mongoose.connection.close();
        console.log('Mongoose connection closed after seeding.');
    }
}

seedDatabase();
