import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SettingsAppendixCountOrderByAggregateInputSchema } from './SettingsAppendixCountOrderByAggregateInputSchema.js';
import { SettingsAppendixMaxOrderByAggregateInputSchema } from './SettingsAppendixMaxOrderByAggregateInputSchema.js';
import { SettingsAppendixMinOrderByAggregateInputSchema } from './SettingsAppendixMinOrderByAggregateInputSchema.js';
export const SettingsAppendixOrderByWithAggregationInputSchema: z.ZodType<Prisma.SettingsAppendixOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SettingsAppendixCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SettingsAppendixMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SettingsAppendixMinOrderByAggregateInputSchema).optional()
}).strict();
export default SettingsAppendixOrderByWithAggregationInputSchema;