// db.js
const mysql = require('mysql2/promise');

// Create a connection pool (recommended for production)
const sqldb = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'cashew4704',
  database: 'sustain',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = sqldb;
