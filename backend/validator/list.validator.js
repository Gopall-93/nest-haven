import { z } from "zod/v4";

const ObjectId = z
  .string()
  .length(24, "must be of size 24")
  .regex(/^[a-fA-F0-9]{24}$/, "invalid Id");

export const listValidator = z.object({
  name: z.string(),
  category: z.string(),
  description: z.string().length(10, "Give description to attract more user"),
  location: z.object({
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postalCode: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),

  price: z.number(),
  currency: z.string().default("USD"),
  guests: z.number(),
  bedrooms: z.number(),
  beds: z.number(),
  bathrooms: z.number(),
  amenities: z.array(z.string()).optional(),
  accessibility: z.array(z.string()),
  features: z.array(z.string()),
  images: z.array(
    z.object({
      url: z.string(),
      public_id: z.string(),
    })
  ),

  hostId: ObjectId,
  reviews: z
    .array(
      z.object({
        reviewer_name: z.string(),
        rating: z.number(),
        comment: z.string(),
        date: z.date(),
      })
    )
    .optional(),

  availability: z.object({
    availableFrom: z.date(),
    availableTo: z.date(),
  }),
  bookingCount: z.number().default(0),
  views: z.number().default(0),
  status: z
    .enum(["active", "inactive", "pending", "rejected"])
    .default("pending"),

  slug: z.string().optional(),
  isFeatured: z.boolean().default(false),
  policies: z.object({
    cancellation: z.string(),
    houseRules: z.string(),
  }),
});
