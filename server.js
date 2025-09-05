require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes'); // move up here

const app = express();
app.use(express.json());
app.use(cors());

// Health check (optional but useful)
app.get('/api/health', (req, res) => {
  const dbStatus = db && db.threadId ? 'connected' : 'initialized';
  res.json({ status: 'ok', db: dbStatus, time: new Date().toISOString() });
});

// Mount all routes under /api
app.use('/api', studentRoutes);
app.use('/api', courseRoutes); // ✅ consistent with students

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
