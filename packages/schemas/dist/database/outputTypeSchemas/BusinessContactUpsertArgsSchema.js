import { z } from 'zod';
import { BusinessContactWhereUniqueInputSchema } from '../inputTypeSchemas/BusinessContactWhereUniqueInputSchema.js';
import { BusinessContactCreateInputSchema } from '../inputTypeSchemas/BusinessContactCreateInputSchema.js';
import { BusinessContactUncheckedCreateInputSchema } from '../inputTypeSchemas/BusinessContactUncheckedCreateInputSchema.js';
import { BusinessContactUpdateInputSchema } from '../inputTypeSchemas/BusinessContactUpdateInputSchema.js';
import { BusinessContactUncheckedUpdateInputSchema } from '../inputTypeSchemas/BusinessContactUncheckedUpdateInputSchema.js';
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
export const BusinessContactUpsertArgsSchema = z.object({
    select: BusinessContactSelectSchema.optional(),
    where: BusinessContactWhereUniqueInputSchema,
    create: z.union([BusinessContactCreateInputSchema, BusinessContactUncheckedCreateInputSchema]),
    update: z.union([BusinessContactUpdateInputSchema, BusinessContactUncheckedUpdateInputSchema]),
}).strict();
export default BusinessContactUpsertArgsSchema;
