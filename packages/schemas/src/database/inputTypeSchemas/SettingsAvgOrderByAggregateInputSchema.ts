import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SettingsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SettingsAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SettingsAvgOrderByAggregateInputSchema;