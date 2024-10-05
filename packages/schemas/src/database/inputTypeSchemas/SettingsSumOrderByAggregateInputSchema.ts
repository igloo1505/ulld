import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SettingsSumOrderByAggregateInputSchema: z.ZodType<Prisma.SettingsSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SettingsSumOrderByAggregateInputSchema;
