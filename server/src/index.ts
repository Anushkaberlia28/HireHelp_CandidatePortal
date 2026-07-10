import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import router from './routes';
import { errorHandler, notFoundHandler } from './common/middleware/error-handler';
import { connectDb } from './database/connection';
// import { connectProducer, disconnectProducer } from './modules/events/kafka-producer';
// import { connectConsumer, disconnectConsumer } from './modules/events/kafka-consumer';

// Silence Kafka partitioner warning
// process.env.KAFKAJS_NO_PARTITIONER_WARNING = '1';

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 5001;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

app.use('/api', router);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use(notFoundHandler);
app.use(errorHandler);

async function start() {
  const dbOk = await connectDb();
  console.log(dbOk ? 'DB connected' : 'DB not connected');

  // await connectProducer();
  // await connectConsumer();

  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

const shutdown = async () => {
  // await disconnectProducer();
  // await disconnectConsumer();
  process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
