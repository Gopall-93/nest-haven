import { z } from "zod/v4";

export const signupSchema = z.object({
  name: z.string().min(2, "Must be atleast 2 characters long"),
  email: z.string().email("Please enter a valid Email"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
  phonenumber: z.string().min(10, "Enter a valid phone number"),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  role: z.string(),
});
