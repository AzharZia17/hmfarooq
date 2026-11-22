import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Manpower Supply",
  "Building Painting",
  "Hospitality Services",
  "Construction Contracts",
  "Other",
] as const;

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{7,20}$/, "Enter a valid phone number, e.g. +974 5000 0000"),
  email: z.union([z.literal(""), z.string().trim().email("Enter a valid email address").max(120)]),
  service: z.enum(SERVICE_OPTIONS, { message: "Please choose a service" }),
  message: z.string().trim().min(10, "Please tell us a little about your requirement (10+ characters)").max(2000),
  // Honeypot: real users never fill this
  website: z.string().max(0).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
