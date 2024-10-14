import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema';
import { NestedEnumautoSettingFilterSchema } from './NestedEnumautoSettingFilterSchema';

export const EnumautoSettingFilterSchema: z.ZodType<Prisma.EnumautoSettingFilter> = z.object({
  equals: z.lazy(() => autoSettingSchema).optional(),
  in: z.lazy(() => autoSettingSchema).array().optional(),
  notIn: z.lazy(() => autoSettingSchema).array().optional(),
  not: z.union([ z.lazy(() => autoSettingSchema),z.lazy(() => NestedEnumautoSettingFilterSchema) ]).optional(),
}).strict();

export default EnumautoSettingFilterSchema;
