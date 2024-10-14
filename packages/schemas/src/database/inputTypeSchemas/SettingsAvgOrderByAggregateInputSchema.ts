import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SettingsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SettingsAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SettingsAvgOrderByAggregateInputSchema;
