const News = require("../model/newsModel");
const axios = require("axios");

// Function to fetch sustainable development news from GNews API
const fetchSustainableNews = async () => {
  try {
    const response = await axios.get("https://gnews.io/api/v4/search", {
      params: {
        q: "sustainable development",
        lang: "en",
        max: 10,
        token: process.env.GNEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("❌ GNews API error:", error.message);
    return [];
  }
};

// Manual fetch via GET route
const getAndStoreNews = async (req, res) => {
  try {
    const articles = await fetchSustainableNews();
    let saved = 0;

    for (const article of articles) {
      const exists = await News.findOne({ url: article.url });
      if (!exists) {
        await News.create(article);
        saved++;
      }
    }

    res.json({ message: "✅ News fetch complete", saved });
  } catch (err) {
    console.error("❌ Controller error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Auto-fetch every 2.4 hours
const startAutoFetching = () => {
  const intervalMs = 2.4 * 60 * 60 * 1000;

  const fetchAndStore = async () => {
    console.log("⏳ Auto-fetching news...");
    try {
      const articles = await fetchSustainableNews();
      let saved = 0;

      for (const article of articles) {
        const exists = await News.findOne({ url: article.url });
        if (!exists) {
          await News.create(article);
          saved++;
        }
      }

      console.log(`✅ Auto-fetch complete. Saved: ${saved} new articles.`);
    } catch (err) {
      console.error("❌ Auto-fetch error:", err.message);
    }
  };

  fetchAndStore(); // Initial run
  setInterval(fetchAndStore, intervalMs); // Repeat every 2.4 hours
};


// Fetch latest 10 news articles for frontend
const getLatestNews = async (req, res) => {
    try {
      const news = await News.find().sort({ publishedAt: -1 }).limit(10);
      res.json(news);
    } catch (err) {
      console.error("❌ Error fetching latest news:", err.message);
      res.status(500).json({ error: "Failed to fetch latest news" });
    }
  };

module.exports = {
  getAndStoreNews,
  startAutoFetching,
  getLatestNews,
};
