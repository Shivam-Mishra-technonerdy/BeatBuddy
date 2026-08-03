import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// 1. Load our local secure .env configurations into process memory
dotenv.config();

// 2. Initialize the low-level PostgreSQL driver connection engine
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// 3. Wrap our driver inside Prisma 7's required translator adapter layer
const adapter = new PrismaPg(pool);

// 4. Instantiate the main Prisma client, passing it our secure adapter module
const prisma = new PrismaClient({ adapter: adapter });

// 5. Export the single instance for safe use across all API server files
export default prisma;
