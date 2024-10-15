import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { JsonFilterSchema } from './JsonFilterSchema.js';
import { FloatFilterSchema } from './FloatFilterSchema.js';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema.js';
import { EquationListRelationFilterSchema } from './EquationListRelationFilterSchema.js';
export const RelatedValuesWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => RelatedValuesWhereInputSchema), z.lazy(() => RelatedValuesWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => RelatedValuesWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => RelatedValuesWhereInputSchema), z.lazy(() => RelatedValuesWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    input: z.lazy(() => JsonFilterSchema).optional(),
    output: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
    equationId: z.lazy(() => IntNullableListFilterSchema).optional(),
    equations: z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict();
export default RelatedValuesWhereInputSchema;
