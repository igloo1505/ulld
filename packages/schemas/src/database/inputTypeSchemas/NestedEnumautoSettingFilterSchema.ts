import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { autoSettingSchema } from '../autoSettingSchema.js';
export const NestedEnumautoSettingFilterSchema: z.ZodType<Prisma.NestedEnumautoSettingFilter> = z.object({
  equals: z.lazy(() => autoSettingSchema).optional(),
  in: z.lazy(() => autoSettingSchema).array().optional(),
  notIn: z.lazy(() => autoSettingSchema).array().optional(),
  not: z.union([ z.lazy(() => autoSettingSchema),z.lazy(() => NestedEnumautoSettingFilterSchema) ]).optional(),
}).strict();
export default NestedEnumautoSettingFilterSchema;