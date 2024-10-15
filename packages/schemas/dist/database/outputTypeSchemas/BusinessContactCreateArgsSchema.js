import { z } from 'zod';
import { BusinessContactCreateInputSchema } from '../inputTypeSchemas/BusinessContactCreateInputSchema.js';
import { BusinessContactUncheckedCreateInputSchema } from '../inputTypeSchemas/BusinessContactUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
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
export const BusinessContactCreateArgsSchema = z.object({
    select: BusinessContactSelectSchema.optional(),
    data: z.union([BusinessContactCreateInputSchema, BusinessContactUncheckedCreateInputSchema]),
}).strict();
export default BusinessContactCreateArgsSchema;
