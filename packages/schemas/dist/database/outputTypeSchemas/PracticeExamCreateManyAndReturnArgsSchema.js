import { z } from 'zod';
import { PracticeExamCreateManyInputSchema } from '../inputTypeSchemas/PracticeExamCreateManyInputSchema.js';
export const PracticeExamCreateManyAndReturnArgsSchema = z.object({
    data: z.union([PracticeExamCreateManyInputSchema, PracticeExamCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default PracticeExamCreateManyAndReturnArgsSchema;
