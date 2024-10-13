import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from '../IntWithAggregatesFilterSchema.js';
import { EnumautoSettingWithAggregatesFilterSchema } from '../EnumautoSettingWithAggregatesFilterSchema.js';
import { autoSettingSchema } from '../autoSettingSchema.js';
import { StringWithAggregatesFilterSchema } from '../StringWithAggregatesFilterSchema.js';
export const AutoSettingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AutoSettingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema),z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema),z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumautoSettingWithAggregatesFilterSchema),z.lazy(() => autoSettingSchema) ]).optional(),
  glob: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();
export default AutoSettingScalarWhereWithAggregatesInputSchema;