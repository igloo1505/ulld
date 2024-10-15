import { z } from 'zod';
export const BusinessContactSelectSchema = z.object({
    id: z.boolean().optional(),
    companyName: z.boolean().optional(),
    contactName: z.boolean().optional(),
    contactPreference: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    message: z.boolean().optional(),
    purpose: z.boolean().optional(),
}).strict();
export default BusinessContactSelectSchema;
