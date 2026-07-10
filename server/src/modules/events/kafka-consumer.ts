import { Kafka, EachMessagePayload } from 'kafkajs';
import { handleFitmentScoreCalculated } from './handlers/fitment-score-handler';
import { handleInterviewScheduled } from './handlers/interview-scheduled-handler';
import { handleOfferGenerated } from './handlers/offer-generated-handler';

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID || 'candidate-service',
  brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
  connectionTimeout: 5000,
  retry: {
    initialRetryTime: 100,
    retries: 0,
  },
});

const consumer = kafka.consumer({ groupId: 'candidate-service-group' });

export const connectConsumer = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'FitmentScoreCalculated', fromBeginning: false });
    await consumer.subscribe({ topic: 'InterviewScheduled', fromBeginning: false });
    await consumer.subscribe({ topic: 'OfferGenerated', fromBeginning: false });
    
    await consumer.run({
      eachMessage: async ({ topic, message }: EachMessagePayload) => {
        const value = message.value?.toString();
        if (!value) return;

        try {
          const data = JSON.parse(value);

          switch (topic) {
            case 'FitmentScoreCalculated':
              await handleFitmentScoreCalculated(data);
              break;
            case 'InterviewScheduled':
              await handleInterviewScheduled(data);
              break;
            case 'OfferGenerated':
              await handleOfferGenerated(data);
              break;
            default:
              console.log(`Unknown topic: ${topic}`);
          }
        } catch (error) {
          console.error(`Error processing message from ${topic}:`, error);
        }
      },
    });

    console.log('Kafka consumer connected and subscribed');
  } catch (error) {
    console.error('Kafka consumer connection failed:', error);
    console.log('Continuing without Kafka consumer...');
  }
};

export const disconnectConsumer = async () => {
  await consumer.disconnect();
  console.log('Kafka consumer disconnected');
};

export default consumer;
