import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema.js';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema.js';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema.js';
export const RelatedValuesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RelatedValuesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema),z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema),z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  input: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  output: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  equationId: z.lazy(() => IntNullableListFilterSchema).optional()
}).strict();
export default RelatedValuesScalarWhereWithAggregatesInputSchema;