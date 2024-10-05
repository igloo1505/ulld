import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumautoSettingFilterSchema } from './EnumautoSettingFilterSchema';
import { autoSettingSchema } from './autoSettingSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const AutoSettingWhereInputSchema: z.ZodType<Prisma.AutoSettingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AutoSettingWhereInputSchema),z.lazy(() => AutoSettingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AutoSettingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AutoSettingWhereInputSchema),z.lazy(() => AutoSettingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumautoSettingFilterSchema),z.lazy(() => autoSettingSchema) ]).optional(),
  glob: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default AutoSettingWhereInputSchema;
