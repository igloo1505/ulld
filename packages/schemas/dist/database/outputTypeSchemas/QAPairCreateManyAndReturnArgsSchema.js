import { z } from 'zod';
import { QAPairCreateManyInputSchema } from '../inputTypeSchemas/QAPairCreateManyInputSchema.js';
export const QAPairCreateManyAndReturnArgsSchema = z.object({
    data: z.union([QAPairCreateManyInputSchema, QAPairCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default QAPairCreateManyAndReturnArgsSchema;
