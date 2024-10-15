import { z } from 'zod';
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
export const FeatureRequestFindUniqueArgsSchema = z.object({
    select: FeatureRequestSelectSchema.optional(),
    where: FeatureRequestWhereUniqueInputSchema,
}).strict();
export default FeatureRequestFindUniqueArgsSchema;
