import { z } from 'zod';
import { FeatureRequestUpdateInputSchema } from '../inputTypeSchemas/FeatureRequestUpdateInputSchema.js';
import { FeatureRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/FeatureRequestUncheckedUpdateInputSchema.js';
import { FeatureRequestWhereUniqueInputSchema } from '../inputTypeSchemas/FeatureRequestWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const FeatureRequestSelectSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    message: z.boolean().optional(),
    category: z.boolean().optional(),
    userBase: z.boolean().optional(),
    receivedOn: z.boolean().optional(),
}).strict();
export const FeatureRequestUpdateArgsSchema = z.object({
    select: FeatureRequestSelectSchema.optional(),
    data: z.union([FeatureRequestUpdateInputSchema, FeatureRequestUncheckedUpdateInputSchema]),
    where: FeatureRequestWhereUniqueInputSchema,
}).strict();
export default FeatureRequestUpdateArgsSchema;
