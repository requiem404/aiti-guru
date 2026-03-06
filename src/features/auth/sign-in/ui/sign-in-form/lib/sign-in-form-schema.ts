import { z } from 'zod';

export const signInSchema = z.object({
  login: z.string().min(1, 'Логин обязателен'),
  password: z
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .max(20, 'Пароль должен содержать максимум 20 символов'),
  rememberMe: z.boolean(),
});

export type SignInFormData = z.infer<typeof signInSchema>;
