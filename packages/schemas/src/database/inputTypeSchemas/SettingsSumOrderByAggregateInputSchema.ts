import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SettingsSumOrderByAggregateInputSchema: z.ZodType<Prisma.SettingsSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SettingsSumOrderByAggregateInputSchema;