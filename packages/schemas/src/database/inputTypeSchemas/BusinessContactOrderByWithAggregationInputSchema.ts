import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BusinessContactCountOrderByAggregateInputSchema } from './BusinessContactCountOrderByAggregateInputSchema';
import { BusinessContactAvgOrderByAggregateInputSchema } from './BusinessContactAvgOrderByAggregateInputSchema';
import { BusinessContactMaxOrderByAggregateInputSchema } from './BusinessContactMaxOrderByAggregateInputSchema';
import { BusinessContactMinOrderByAggregateInputSchema } from './BusinessContactMinOrderByAggregateInputSchema';
import { BusinessContactSumOrderByAggregateInputSchema } from './BusinessContactSumOrderByAggregateInputSchema';

export const BusinessContactOrderByWithAggregationInputSchema: z.ZodType<Prisma.BusinessContactOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  contactName: z.lazy(() => SortOrderSchema).optional(),
  contactPreference: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  purpose: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => BusinessContactCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BusinessContactAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BusinessContactMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BusinessContactMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BusinessContactSumOrderByAggregateInputSchema).optional()
}).strict();

export default BusinessContactOrderByWithAggregationInputSchema;
