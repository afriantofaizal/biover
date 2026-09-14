import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().optional(),

  company: z.string().optional(),

  phone: z.string().optional(),

  email: z
    .email("Invalid email address."),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters long."),
})

export type ContactFormValues = z.infer<typeof contactSchema>