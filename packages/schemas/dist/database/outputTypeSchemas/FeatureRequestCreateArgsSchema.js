import { z } from 'zod';
import { FeatureRequestCreateInputSchema } from '../inputTypeSchemas/FeatureRequestCreateInputSchema.js';
import { FeatureRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/FeatureRequestUncheckedCreateInputSchema.js';
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
export const FeatureRequestCreateArgsSchema = z.object({
    select: FeatureRequestSelectSchema.optional(),
    data: z.union([FeatureRequestCreateInputSchema, FeatureRequestUncheckedCreateInputSchema]),
}).strict();
export default FeatureRequestCreateArgsSchema;
