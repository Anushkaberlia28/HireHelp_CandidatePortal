import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);

export const connectDb = async () => {
  try {
    await pool.connect();
    console.log('Database connected successfully');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    console.log('Continuing without database connection...');
    return false;
  }
};

export const disconnectDb = async () => {
  await pool.end();
  console.log('Database disconnected');
};
