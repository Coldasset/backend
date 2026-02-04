import { FastifyCorsOptions } from '@fastify/cors';

export const allowedOrigins = [
  'https://coldasset.netlify.app',
  'https://cold-asset.com',
  // 'http://localhost:3000',
  // 'http://localhost:4000',
];

export const corsOptions: FastifyCorsOptions = {
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
};
