import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { AutoSettingWhereInputSchema } from '../AutoSettingWhereInputSchema.js';
import { EnumautoSettingFilterSchema } from '../EnumautoSettingFilterSchema.js';
import { autoSettingSchema } from '../autoSettingSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
export const AutoSettingWhereUniqueInputSchema: z.ZodType<Prisma.AutoSettingWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => AutoSettingWhereInputSchema),z.lazy(() => AutoSettingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AutoSettingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AutoSettingWhereInputSchema),z.lazy(() => AutoSettingWhereInputSchema).array() ]).optional(),
  type: z.union([ z.lazy(() => EnumautoSettingFilterSchema),z.lazy(() => autoSettingSchema) ]).optional(),
  glob: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());
export default AutoSettingWhereUniqueInputSchema;