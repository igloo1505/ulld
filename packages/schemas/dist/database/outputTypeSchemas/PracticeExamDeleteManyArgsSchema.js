import { z } from 'zod';
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema.js';
export const PracticeExamDeleteManyArgsSchema = z.object({
    where: PracticeExamWhereInputSchema.optional(),
}).strict();
export default PracticeExamDeleteManyArgsSchema;
