import { z } from 'zod';
export const BusinessContactCreateManyInputSchema = z.object({
    id: z.number().int().optional(),
    companyName: z.string(),
    contactName: z.string(),
    contactPreference: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    message: z.string(),
    purpose: z.string().optional().nullable()
}).strict();
export default BusinessContactCreateManyInputSchema;
