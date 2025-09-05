const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'test'
});

db.connect((err) => {
  if (err) {
    console.error('❌ DB connection failed:', err.stack);
    return;
  }
  console.log('✅ MySQL connected', db.threadId);
});

module.exports = db;