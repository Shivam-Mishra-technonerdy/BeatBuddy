import pg from 'pg';
import dotenv from 'dotenv';

// 1. Wake up our dotenv configuration system to read your .env file
dotenv.config();

// 2. Extract your secure cloud connection key from memory
const connectionString = process.env.DATABASE_URL;

// 3. Initialize the permanent connection Pool (Hiring our drivers)
const pool = new pg.Pool({
  connectionString: connectionString,
  max: 10,                       // Caps our maximum concurrent pipes to 10
  idleTimeoutMillis: 30000,      // Automatically closes empty idle pipes after 30 seconds
  connectionTimeoutMillis: 2000, // Errors out if a pipe fails to connect within 2 seconds
});

// 4. Event Listener: Prints to your terminal when a connection is established
pool.on('connect', () => {
  console.log('🔌 Secure database pipe established from pool.');
});

// 5. Security Alarm: Prevents the Node server from crashing if a pipe drops unexpectedly
pool.on('error', (err) => {
  console.error('❌ Unexpected database pool connection error:', err);
});

// 6. Export the pool manager instance for use across other API route files
export default pool;
