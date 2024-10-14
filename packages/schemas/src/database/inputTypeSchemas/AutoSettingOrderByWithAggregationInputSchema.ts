import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AutoSettingCountOrderByAggregateInputSchema } from './AutoSettingCountOrderByAggregateInputSchema';
import { AutoSettingAvgOrderByAggregateInputSchema } from './AutoSettingAvgOrderByAggregateInputSchema';
import { AutoSettingMaxOrderByAggregateInputSchema } from './AutoSettingMaxOrderByAggregateInputSchema';
import { AutoSettingMinOrderByAggregateInputSchema } from './AutoSettingMinOrderByAggregateInputSchema';
import { AutoSettingSumOrderByAggregateInputSchema } from './AutoSettingSumOrderByAggregateInputSchema';

export const AutoSettingOrderByWithAggregationInputSchema: z.ZodType<Prisma.AutoSettingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  glob: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AutoSettingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AutoSettingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AutoSettingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AutoSettingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AutoSettingSumOrderByAggregateInputSchema).optional()
}).strict();

export default AutoSettingOrderByWithAggregationInputSchema;
