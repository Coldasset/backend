import { FastifyInstance } from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';

export const setupSwagger = async (app: FastifyInstance) => {
  // Register Swagger core first
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Cold Asset API',
        description: 'API documentation for Cold Asset API Endpoint',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:4000',
          description: 'Local server',
        },
      ],
      tags: [
        { name: 'Users', description: 'User-related endpoints' },
        { name: 'Auth', description: 'Authentication-related endpoints' },
        { name: 'Transactions', description: 'Transaction-related endpoints' },
        {
          name: 'Notifications',
          description: 'Notification-related endpoints',
        },
        { name: 'Admins', description: 'Administrative-related endpoints' },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  });

  // Then register the UI plugin
  await app.register(fastifySwaggerUI, {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: true,
    },
    staticCSP: true,
  });
};
