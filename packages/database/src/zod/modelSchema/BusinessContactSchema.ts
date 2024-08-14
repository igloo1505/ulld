import { z } from 'zod';

/////////////////////////////////////////
// BUSINESS CONTACT SCHEMA
/////////////////////////////////////////

export const BusinessContactSchema = z.object({
  id: z.number().int(),
  companyName: z.string(),
  contactName: z.string(),
  contactPreference: z.string(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  message: z.string(),
  purpose: z.string().nullable(),
})

export type BusinessContact = z.infer<typeof BusinessContactSchema>

/////////////////////////////////////////
// BUSINESS CONTACT PARTIAL SCHEMA
/////////////////////////////////////////

export const BusinessContactPartialSchema = BusinessContactSchema.partial()

export type BusinessContactPartial = z.infer<typeof BusinessContactPartialSchema>

export default BusinessContactSchema;
