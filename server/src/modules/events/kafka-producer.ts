import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID || 'candidate-service',
  brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
  connectionTimeout: 5000,
  retry: {
    initialRetryTime: 100,
    retries: 0,
  },
});

const producer = kafka.producer();

export const connectProducer = async () => {
  try {
    await producer.connect();
    console.log('Kafka producer connected');
  } catch (error) {
    console.error('Kafka producer connection failed:', error);
    console.log('Continuing without Kafka producer...');
  }
};

export const disconnectProducer = async () => {
  await producer.disconnect();
  console.log('Kafka producer disconnected');
};

export const publishCandidateRegistered = async (candidateData: {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}) => {
  await producer.send({
    topic: 'CandidateRegistered',
    messages: [
      {
        value: JSON.stringify(candidateData),
        key: String(candidateData.id),
      },
    ],
  });
};

export const publishResumeUploaded = async (resumeData: {
  candidateId: number;
  resumeId: number;
  s3Key: string;
  originalFileName: string;
}) => {
  await producer.send({
    topic: 'ResumeUploaded',
    messages: [
      {
        value: JSON.stringify(resumeData),
        key: String(resumeData.candidateId),
      },
    ],
  });
};

export default producer;
