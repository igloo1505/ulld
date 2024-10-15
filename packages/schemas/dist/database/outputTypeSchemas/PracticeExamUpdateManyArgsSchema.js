import { z } from 'zod';
import { PracticeExamUpdateManyMutationInputSchema } from '../inputTypeSchemas/PracticeExamUpdateManyMutationInputSchema.js';
import { PracticeExamUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PracticeExamUncheckedUpdateManyInputSchema.js';
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema.js';
export const PracticeExamUpdateManyArgsSchema = z.object({
    data: z.union([PracticeExamUpdateManyMutationInputSchema, PracticeExamUncheckedUpdateManyInputSchema]),
    where: PracticeExamWhereInputSchema.optional(),
}).strict();
export default PracticeExamUpdateManyArgsSchema;
