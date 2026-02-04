import { FastifyInstance } from 'fastify';

//Handlers
import { adminLoginHandler, changePasswordHandler, loginHandler, passcodeVerificationHandler, passwordResetHandler, sendPasswordReset, verifyPasswordResetHandler } from './auth.controller';

//Schemas
import { authRef, ChangePasswordInput, PasscodeVerificationInput } from './auth.schema';
import { generalRef } from '../general/general.schema';

export default async function authRoutes(app: FastifyInstance) {

  //Login User
  app.post('/login', {
    schema: {
      tags: ['Auth'],
      body: authRef('loginSchema'),
      response: {
        200: authRef('loginResponseSchema'),
        400: generalRef('badRequestSchema'),
      },
    },
  },
    loginHandler
  );

  // Passcode Verification
  app.post<{ Body: PasscodeVerificationInput }>('/verifyPasscode', {
    preHandler: app.authenticate,
    schema: {
      tags: ['Auth'],
      security: [{ bearerAuth: [] }],
      body: authRef('passcodeVerificationSchema'),
      response: {
        400: generalRef('badRequestSchema'),
      },
    },
  },
    passcodeVerificationHandler
  );

  //Password Reset Verification
  app.post('/passwordResetVerification', {
    schema: {
      tags: ['Auth'],
      body: authRef('passwordResetEmailSchema'),
      response: {
        200: generalRef('responseSchema'),
        400: generalRef('badRequestSchema'),
        403: generalRef('forbiddenSchema'),
      },
    },
  },
    sendPasswordReset
  );

  //Verify Password Reset OTP
  app.post('/verifyPasswordResetOTP', {
    schema: {
      tags: ['Auth'],
      body: authRef('verifyPasswordResetSchema'),
      response: {
        200: generalRef('responseSchema'),
        400: generalRef('badRequestSchema'),
      },
    },
  },
    verifyPasswordResetHandler
  );

  //Set a New Password
  app.post('/resetPassword', {
    schema: {
      tags: ['Auth'],
      body: authRef('passwordResetSchema'),
      response: {
        200: generalRef('responseSchema'),
        400: generalRef('badRequestSchema'),
      },
    },
  },
    passwordResetHandler
  );

  //Change Password
  app.post<{ Body: ChangePasswordInput }>('/changePassword', {
    preHandler: app.authenticate,
    schema: {
      tags: ['Auth'],
      security: [{ bearerAuth: [] }],
      body: authRef('changePasswordSchema'),
      response: {
        200: generalRef('responseSchema'),
        400: generalRef('badRequestSchema'),
        403: generalRef('forbiddenSchema'),
        409: generalRef('conflictRequestSchema'),
      },
    },
  },
    changePasswordHandler
  );


  //Admin Endpoints


  //Authenticate an Admin
  app.post('/adminLogin', {
    schema: {
      tags: ['Auth'],
      body: authRef('loginSchema'),
    },
  },
    adminLoginHandler
  );
}
