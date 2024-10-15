import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { JsonFilterSchema } from './JsonFilterSchema.js';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const EquationScalarWhereInputSchema: z.ZodType<Prisma.EquationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EquationScalarWhereInputSchema),z.lazy(() => EquationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EquationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EquationScalarWhereInputSchema),z.lazy(() => EquationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  equationId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  desc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  asPython: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  variableLegend: z.lazy(() => JsonFilterSchema).optional(),
  variables: z.lazy(() => StringNullableListFilterSchema).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default EquationScalarWhereInputSchema;