import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const AutoSettingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AutoSettingAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default AutoSettingAvgOrderByAggregateInputSchema;