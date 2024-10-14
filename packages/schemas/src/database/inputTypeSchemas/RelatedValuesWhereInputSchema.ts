import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema';
import { EquationListRelationFilterSchema } from './EquationListRelationFilterSchema';

export const RelatedValuesWhereInputSchema: z.ZodType<Prisma.RelatedValuesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RelatedValuesWhereInputSchema),z.lazy(() => RelatedValuesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RelatedValuesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RelatedValuesWhereInputSchema),z.lazy(() => RelatedValuesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  input: z.lazy(() => JsonFilterSchema).optional(),
  output: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  equationId: z.lazy(() => IntNullableListFilterSchema).optional(),
  equations: z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict();

export default RelatedValuesWhereInputSchema;
