import { z } from 'zod';

export const signUpFormSchema = z
  .object({
    email: z.email({ message: 'Invalid email address' }),
    firstName: z
      .string()
      .min(3, { message: 'First name must be at least 3 characters long' })
      .max(50, { message: 'First name must be less than 50 characters' }),
    lastName: z
      .string()
      .max(50, { message: 'Last name must be less than 50 characters' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      }),
    confirmPassword: z.string(),
    //   .min(8, { message: 'Please confirm your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
