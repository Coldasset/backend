import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

// List of allowed email endings
const allowedEmailEndings = [
  '@gmail.com',
  '@outlook.com',
  '@hotmail.com',
  '@live.com',
  '@msn.com',
  '@yahoo.com',
  '@ymail.com',
  '@rocketmail.com',
  '@icloud.com',
  '@protonmail.com',
  '@zoho.com',
  '@aol.com',
  '@fastmail.com',
];

const emailDomainPattern = new RegExp(
  `(${allowedEmailEndings.map((domain) => domain.replace('.', '\\.')).join('|')})$`
);

export const emailValidationSchema = z
  .string()
  .email()
  .regex(emailDomainPattern, 'Invalid email domain');

const createUserSchema = z.object({
  email: z
    .string({ required_error: 'Email is required', invalid_type_error: 'Email must be a valid email' })
    .email(),
  userName: z.string({ required_error: 'Username is required', }).min(4, 'Username too short - should be 4 Chars minimum'),
  country: z.string({ required_error: 'Country is required' }),
  phoneNumber: z.string({ required_error: 'Phone number is required' }),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }).min(6, 'Password too short - should be 6 Chars minimum'),

  device: z.object({
    ua: z.string().optional(),
    type: z.enum(["desktop", "mobile", "tablet", "console", "embedded", "smarttv", "wearable", "xr"]).optional(),
    os: z.string().optional(),
    browser: z.string().optional(),
  })
});

const verifyUserSchema = z.object({
  verificationCode: z
    .string({
      required_error: 'Verification code is required',
    })
    .min(6, 'Verification code must be six (6) characters minimum'),
});

const editUserSchema = z.object({
  email: z
    .string({
      required_error: 'Your email is required',
      invalid_type_error: 'Email must be a valid email',
    })
    .email(),
  userName: z.string().optional(),
  passcode: z.string().optional(),
  country: z.string().optional(),
  address: z.string().optional(),
  profilePicture: z.string().optional(),
  gender: z.enum(['male', 'female', 'prefer not to say']).optional(),
  phoneNumber: z.string().optional(),
  password: z
    .string()
    .min(6, 'Password too short - should be 6 Chars minimum')
    .optional(),
  isVerified: z.boolean().optional(),
  isSuspended: z.boolean().optional(),
  message: z.string().optional(),
  minimumTransfer: z.number().min(1).optional(),
  kyc: z
    .object({
      images: z.array(z.string()).optional(),
      status: z.enum(['pending', 'accepted', 'rejected']).optional(),
      idType: z.string().optional(),
      lastSubmissionDate: z.date().optional(),
    })
    .optional(),
  encryptedPassword: z.string().optional(),
});

const fetchUserSchema = z.object({
  value: z.string({
    required_error: 'An Email, an AccountId or a Username is required',
  }),
});


export type CreateUserInput = z.infer<typeof createUserSchema>;
export type VerifyUserInput = z.infer<typeof verifyUserSchema>;
export type EditUserInput = z.infer<typeof editUserSchema>;
export type FetchUserInput = z.infer<typeof fetchUserSchema>;

export const { schemas: userSchemas, $ref: userRef } = buildJsonSchemas(
  { createUserSchema, verifyUserSchema, editUserSchema },
  { $id: 'UserSchema' }
);
