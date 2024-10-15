import { z } from 'zod';
export const FeatureRequestCreateuserBaseInputSchema = z.object({
    set: z.string().array()
}).strict();
export default FeatureRequestCreateuserBaseInputSchema;
