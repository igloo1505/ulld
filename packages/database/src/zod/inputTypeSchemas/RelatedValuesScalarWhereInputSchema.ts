import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema';

export const RelatedValuesScalarWhereInputSchema: z.ZodType<Prisma.RelatedValuesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RelatedValuesScalarWhereInputSchema),z.lazy(() => RelatedValuesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RelatedValuesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RelatedValuesScalarWhereInputSchema),z.lazy(() => RelatedValuesScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  input: z.lazy(() => JsonFilterSchema).optional(),
  output: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  equationId: z.lazy(() => IntNullableListFilterSchema).optional()
}).strict();

export default RelatedValuesScalarWhereInputSchema;
