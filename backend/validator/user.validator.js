import { z } from "zod/v4";

const ObjectId = z
  .string()
  .length(24, "must be of size 24")
  .regex(/^[a-fA-F0-9]{24}$/, "invalid Id");

export const userValidator = z.object({
  name: z.string().min(2, "must be atlest 2 character long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be atleast 6 character long"),
  phonenumber: z.string().min(10, "Invalid phone number"),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  role: z.string(),
  wishlist: z.array(ObjectId).optional().default([]),
  avatar: z.string().url("Invalid avatar URL").optional(),
  recenttrips: z.array(ObjectId).optional().default([]),
  createdAt: z
    .preprocess((arg) => {
      if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
    }, z.date())
    .optional(),
  emailVerified: z.boolean().optional().default(false),
  phoneVerified: z.boolean().optional().default(false),
});
