import { z } from 'zod';
export const FeatureRequestSelectSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    message: z.boolean().optional(),
    category: z.boolean().optional(),
    userBase: z.boolean().optional(),
    receivedOn: z.boolean().optional(),
}).strict();
export default FeatureRequestSelectSchema;
