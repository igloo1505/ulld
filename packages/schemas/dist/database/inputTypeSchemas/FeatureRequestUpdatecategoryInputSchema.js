import { z } from 'zod';
export const FeatureRequestUpdatecategoryInputSchema = z.object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
}).strict();
export default FeatureRequestUpdatecategoryInputSchema;
