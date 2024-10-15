import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { IntFilterSchema } from './IntFilterSchema.js';
export const QAPairScalarWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => QAPairScalarWhereInputSchema), z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => QAPairScalarWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => QAPairScalarWhereInputSchema), z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    question: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    answer: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    secondaryLabel: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    correctCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    inCorrectCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
}).strict();
export default QAPairScalarWhereInputSchema;
