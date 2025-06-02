const express = require('express');
const cors = require('cors');
// const { GoogleGenAI } = require('@google/genai');

const pool = require('./db');
const postRoutes = require('./routes/postsRoute');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());



app.use('/posts', postRoutes);
app.get('/', (req, res) => {
  res.send('API is running');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
