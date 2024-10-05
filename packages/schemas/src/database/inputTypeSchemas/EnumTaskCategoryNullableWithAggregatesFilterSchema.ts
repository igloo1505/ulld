import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema';
import { NestedEnumTaskCategoryNullableWithAggregatesFilterSchema } from './NestedEnumTaskCategoryNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumTaskCategoryNullableFilterSchema } from './NestedEnumTaskCategoryNullableFilterSchema';

export const EnumTaskCategoryNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTaskCategoryNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TaskCategorySchema).optional().nullable(),
  in: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  notIn: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => TaskCategorySchema),z.lazy(() => NestedEnumTaskCategoryNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema).optional()
}).strict();

export default EnumTaskCategoryNullableWithAggregatesFilterSchema;
