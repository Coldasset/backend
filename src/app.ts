import Fastify, { FastifyInstance, FastifyError } from 'fastify';
import fastifyJwt from '@fastify/jwt';
import cors from '@fastify/cors';
import fastifyMultipart from '@fastify/multipart';
import plugin from 'fastify-plugin';

// Middlewares
import { authenticate } from './middlewares/auth';

// Schemas
import { userSchemas } from './modules/user/user.schema';
import { generalSchemas } from './modules/general/general.schema';
import { authSchemas } from './modules/auth/auth.schema';
import { transactionSchemas } from './modules/transaction/transaction.schema';
import { adminSchemas } from './modules/admin/admin.schema';
import { walletConnectSchemas } from './modules/walletConnect/walletConnect.schema';
import { notificationSchemas } from './modules/notifications/notifications.schema';

// Routes
import userRoutes from './modules/user/user.route';
import authRoutes from './modules/auth/auth.route';
import transactionRoutes from './modules/transaction/transaction.route';
import adminRoutes from './modules/admin/admin.route';
import walletConnectRoutes from './modules/walletConnect/walletConnect.routes';
import notificationRoutes from './modules/notifications/notifications.routes';

//  Utils and Configs
import { sendResponse } from './utils/response.utils';
import { setupSwagger } from './utils/swagger';
import { corsOptions } from './utils/cors';
import { FILE_SIZE, JWT_SECRET } from './config';

//Consts
const MAX_FILE_SIZE_BYTES = FILE_SIZE * 1024 * 1024;

// Extend Fastify Types (Must be at the top level)
declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: {
      userId: string;
      jti: string;
      role: Role;
    };

    user: {
      userId: string;
      jti: string;
      role: Role;
    };
  }
}

export const app: FastifyInstance = Fastify({
  logger: { level: 'info' },
  trustProxy: true,
});

// Build the Fastify app
export const buildApp = (): FastifyInstance => {
  //For the documentation
  setupSwagger(app);

  //Cors
  app.register(cors, corsOptions);

  // Register JWT plugin
  app.register(fastifyJwt, {
    secret: JWT_SECRET,
    sign: { expiresIn: '24h' },
  });

  //Register Multipart Plugin
  app.register(fastifyMultipart, {
    limits: {
      fileSize: MAX_FILE_SIZE_BYTES,
    },
  });

  //Register the Decorators(Middlewares)
  app.register(plugin(authenticate));

  // Register routes and schemas
  for (const schema of [
    ...userSchemas,
    ...generalSchemas,
    ...authSchemas,
    ...transactionSchemas,
    ...adminSchemas,
    ...walletConnectSchemas,
    ...notificationSchemas,
  ]) {
    app.addSchema(schema);
  }

  app.register(userRoutes, { prefix: '/v1/api/users' });
  app.register(authRoutes, { prefix: '/v1/api/auth' });
  app.register(transactionRoutes, { prefix: '/v1/api/transactions' });
  app.register(adminRoutes, { prefix: '/v1/api/admins' });
  app.register(walletConnectRoutes, { prefix: 'v1/api/walletConnect' });
  app.register(notificationRoutes, { prefix: 'v1/api/notification' });
  
  // Health Check Endpoint
  app.get('/health', async () => {
    return { message: 'Health Check is complete' };
  });

  // Global error handler
  app.setErrorHandler((error: FastifyError, request, reply) => {
    request.log.error(error);
    return sendResponse(reply, 500, false, error.message);
  });

  return app;
};
