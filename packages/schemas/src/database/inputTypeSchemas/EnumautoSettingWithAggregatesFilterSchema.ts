import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema';
import { NestedEnumautoSettingWithAggregatesFilterSchema } from './NestedEnumautoSettingWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumautoSettingFilterSchema } from './NestedEnumautoSettingFilterSchema';

export const EnumautoSettingWithAggregatesFilterSchema: z.ZodType<Prisma.EnumautoSettingWithAggregatesFilter> = z.object({
  equals: z.lazy(() => autoSettingSchema).optional(),
  in: z.lazy(() => autoSettingSchema).array().optional(),
  notIn: z.lazy(() => autoSettingSchema).array().optional(),
  not: z.union([ z.lazy(() => autoSettingSchema),z.lazy(() => NestedEnumautoSettingWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumautoSettingFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumautoSettingFilterSchema).optional()
}).strict();

export default EnumautoSettingWithAggregatesFilterSchema;
