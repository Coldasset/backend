import { FastifyCorsOptions } from '@fastify/cors';
import { NODE_ENV } from '../config';

export const allowedOrigins = NODE_ENV === 'development'
  ? [
    'http://localhost:3000',
    'http://localhost:4000'
  ]
  : [
    'https://coldasset.netlify.app',
    'https://cold-asset.com'
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
