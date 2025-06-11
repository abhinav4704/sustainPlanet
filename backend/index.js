const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const { GoogleGenAI } = require('@google/genai');
const { startAutoFetching } = require("./controller/newsController");



const pool = require('./db');
const postRoutes = require('./routes/postsRoute');
const commentRoutes = require('./routes/commentsRoute')
const userRoutes = require('./routes/userRoute');
const newsRoutes = require('./routes/newsRoute');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sustainplanet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use("/news", newsRoutes);

// Start automatic news fetching (without cron)
// startAutoFetching();


app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
