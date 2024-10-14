import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { RelatedValuesWhereInputSchema } from './RelatedValuesWhereInputSchema.js';
import { JsonFilterSchema } from './JsonFilterSchema.js';
import { FloatFilterSchema } from './FloatFilterSchema.js';
import { EquationListRelationFilterSchema } from './EquationListRelationFilterSchema.js';
export const RelatedValuesWhereUniqueInputSchema: z.ZodType<Prisma.RelatedValuesWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    equationId: z.number().int().array()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    equationId: z.number().int().array(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  equationId: z.number().int().array().optional(),
  AND: z.union([ z.lazy(() => RelatedValuesWhereInputSchema),z.lazy(() => RelatedValuesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RelatedValuesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RelatedValuesWhereInputSchema),z.lazy(() => RelatedValuesWhereInputSchema).array() ]).optional(),
  input: z.lazy(() => JsonFilterSchema).optional(),
  output: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  equations: z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict());
export default RelatedValuesWhereUniqueInputSchema;