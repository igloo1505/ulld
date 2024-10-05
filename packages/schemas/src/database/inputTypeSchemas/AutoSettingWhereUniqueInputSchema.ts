import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutoSettingWhereInputSchema } from './AutoSettingWhereInputSchema';
import { EnumautoSettingFilterSchema } from './EnumautoSettingFilterSchema';
import { autoSettingSchema } from './autoSettingSchema';
import { StringFilterSchema } from './StringFilterSchema';

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
