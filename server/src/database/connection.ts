import dotenv from "dotenv";

dotenv.config();
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
const { Pool } = pg;

let pool: pg.Pool | null = null;
let dbInstance: ReturnType<typeof drizzle> | null = null;

export const getPool = () => {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }
  return pool;
};

export const getDb = () => {
  if (!dbInstance) {
    dbInstance = drizzle(getPool());
  }
  return dbInstance;
};

// Legacy export for backward compatibility - now uses lazy initialization
const dbHandler = {
  get(_target: any, prop: string | symbol) {
    return getDb()[prop as keyof ReturnType<typeof drizzle>];
  }
};

export const db = new Proxy({}, dbHandler) as any;

export const connectDb = async () => {
  try {
    await getPool().connect();
    console.log('Database connected successfully');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    console.log('Continuing without database connection...');
    return false;
  }
};

export const disconnectDb = async () => {
  if (pool) {
    await pool.end();
    console.log('Database disconnected');
  }
};
