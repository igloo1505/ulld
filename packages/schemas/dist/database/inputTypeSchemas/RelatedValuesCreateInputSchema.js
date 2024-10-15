import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from './InputJsonValueSchema.js';
import { RelatedValuesCreateequationIdInputSchema } from './RelatedValuesCreateequationIdInputSchema.js';
import { EquationCreateNestedManyWithoutRelatedValuesInputSchema } from './EquationCreateNestedManyWithoutRelatedValuesInputSchema.js';
export const RelatedValuesCreateInputSchema = z.object({
    input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
    output: z.number(),
    equationId: z.union([z.lazy(() => RelatedValuesCreateequationIdInputSchema), z.number().int().array()]).optional(),
    equations: z.lazy(() => EquationCreateNestedManyWithoutRelatedValuesInputSchema).optional()
}).strict();
export default RelatedValuesCreateInputSchema;
