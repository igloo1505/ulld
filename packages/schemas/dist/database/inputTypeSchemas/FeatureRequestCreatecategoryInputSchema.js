import { z } from 'zod';
export const FeatureRequestCreatecategoryInputSchema = z.object({
    set: z.string().array()
}).strict();
export default FeatureRequestCreatecategoryInputSchema;
