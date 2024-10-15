import { z } from 'zod';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema.js';
import { BusinessContactOrderByWithRelationInputSchema } from '../inputTypeSchemas/BusinessContactOrderByWithRelationInputSchema.js';
import { BusinessContactWhereUniqueInputSchema } from '../inputTypeSchemas/BusinessContactWhereUniqueInputSchema.js';
import { BusinessContactScalarFieldEnumSchema } from '../inputTypeSchemas/BusinessContactScalarFieldEnumSchema.js';
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
export const BusinessContactFindFirstOrThrowArgsSchema = z.object({
    select: BusinessContactSelectSchema.optional(),
    where: BusinessContactWhereInputSchema.optional(),
    orderBy: z.union([BusinessContactOrderByWithRelationInputSchema.array(), BusinessContactOrderByWithRelationInputSchema]).optional(),
    cursor: BusinessContactWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([BusinessContactScalarFieldEnumSchema, BusinessContactScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default BusinessContactFindFirstOrThrowArgsSchema;
