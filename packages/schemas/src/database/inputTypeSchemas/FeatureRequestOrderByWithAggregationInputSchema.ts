import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { FeatureRequestCountOrderByAggregateInputSchema } from './FeatureRequestCountOrderByAggregateInputSchema';
import { FeatureRequestAvgOrderByAggregateInputSchema } from './FeatureRequestAvgOrderByAggregateInputSchema';
import { FeatureRequestMaxOrderByAggregateInputSchema } from './FeatureRequestMaxOrderByAggregateInputSchema';
import { FeatureRequestMinOrderByAggregateInputSchema } from './FeatureRequestMinOrderByAggregateInputSchema';
import { FeatureRequestSumOrderByAggregateInputSchema } from './FeatureRequestSumOrderByAggregateInputSchema';

export const FeatureRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.FeatureRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  userBase: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FeatureRequestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FeatureRequestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FeatureRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FeatureRequestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FeatureRequestSumOrderByAggregateInputSchema).optional()
}).strict();

export default FeatureRequestOrderByWithAggregationInputSchema;
