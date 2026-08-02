import express from 'express';
import dotenv from 'dotenv';
import pool from './db.js';

// 1. Initialize environment variables configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middleware: Enables our server to read JSON payloads sent by a client
app.use(express.json());

// 2. Health Route: Uses your async/await logic to test the database link!
app.get('/api/health', async (req, res) => {
  try {
    // Borrow an open line from our pool and ask PostgreSQL for its current time stamp
    const result = await pool.query('SELECT NOW();');
    
    // If the network request succeeds, send back a multi-layer success payload
    res.json({ 
      status: "Healthy", 
      message: "BeatBuddy API Server is live! 🎧",
      database: "Connected successfully! 🔌",
      singaporeCloudTime: result.rows[0].now // Extracts the actual time from the Neon server
    });
  } catch (error) {
    // Security catch: If the database password or connection fails, log it here
    console.error("❌ Database connection failure:", error);
    res.status(500).json({ 
      status: "Error", 
      message: "Server is running, but cloud database connection failed." 
    });
  }
});

// 4. Start the server engine and tell it to listen to our port
app.listen(PORT, () => {
  console.log(`🚀 BeatBuddy Server running on http://localhost:${PORT}`);
});
