import { z } from 'zod';
import { WaitlistRequestCreateManyInputSchema } from '../inputTypeSchemas/WaitlistRequestCreateManyInputSchema.js';
export const WaitlistRequestCreateManyArgsSchema = z.object({
    data: z.union([WaitlistRequestCreateManyInputSchema, WaitlistRequestCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default WaitlistRequestCreateManyArgsSchema;
