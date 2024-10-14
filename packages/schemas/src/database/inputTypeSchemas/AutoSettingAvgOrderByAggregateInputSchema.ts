import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AutoSettingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AutoSettingAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AutoSettingAvgOrderByAggregateInputSchema;
