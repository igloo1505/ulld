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
});
/////////////////////////////////////////
// BUSINESS CONTACT PARTIAL SCHEMA
/////////////////////////////////////////
export const BusinessContactPartialSchema = BusinessContactSchema.partial();
export default BusinessContactSchema;
