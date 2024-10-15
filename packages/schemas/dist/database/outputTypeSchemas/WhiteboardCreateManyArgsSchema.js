import { z } from 'zod';
import { WhiteboardCreateManyInputSchema } from '../inputTypeSchemas/WhiteboardCreateManyInputSchema.js';
export const WhiteboardCreateManyArgsSchema = z.object({
    data: z.union([WhiteboardCreateManyInputSchema, WhiteboardCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default WhiteboardCreateManyArgsSchema;
