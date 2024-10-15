import { z } from 'zod';
import { SubjectCreateManyInputSchema } from '../inputTypeSchemas/SubjectCreateManyInputSchema.js';
export const SubjectCreateManyAndReturnArgsSchema = z.object({
    data: z.union([SubjectCreateManyInputSchema, SubjectCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default SubjectCreateManyAndReturnArgsSchema;
