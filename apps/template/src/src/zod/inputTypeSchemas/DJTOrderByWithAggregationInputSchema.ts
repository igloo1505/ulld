import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DJTCountOrderByAggregateInputSchema } from './DJTCountOrderByAggregateInputSchema';
import { DJTAvgOrderByAggregateInputSchema } from './DJTAvgOrderByAggregateInputSchema';
import { DJTMaxOrderByAggregateInputSchema } from './DJTMaxOrderByAggregateInputSchema';
import { DJTMinOrderByAggregateInputSchema } from './DJTMinOrderByAggregateInputSchema';
import { DJTSumOrderByAggregateInputSchema } from './DJTSumOrderByAggregateInputSchema';

export const DJTOrderByWithAggregationInputSchema: z.ZodType<Prisma.DJTOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pluginName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  modelId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utilityStringField: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utilityNumberField: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utilityDateField: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utilityDateFieldTwo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DJTCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DJTAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DJTMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DJTMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DJTSumOrderByAggregateInputSchema).optional()
}).strict();

export default DJTOrderByWithAggregationInputSchema;
