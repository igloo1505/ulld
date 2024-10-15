import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema.js';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema.js';
export const EquationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EquationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EquationScalarWhereWithAggregatesInputSchema),z.lazy(() => EquationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EquationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EquationScalarWhereWithAggregatesInputSchema),z.lazy(() => EquationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  equationId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  desc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  asPython: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  variableLegend: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  variables: z.lazy(() => StringNullableListFilterSchema).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default EquationScalarWhereWithAggregatesInputSchema;