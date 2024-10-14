import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { QAPairCountOrderByAggregateInputSchema } from './QAPairCountOrderByAggregateInputSchema';
import { QAPairAvgOrderByAggregateInputSchema } from './QAPairAvgOrderByAggregateInputSchema';
import { QAPairMaxOrderByAggregateInputSchema } from './QAPairMaxOrderByAggregateInputSchema';
import { QAPairMinOrderByAggregateInputSchema } from './QAPairMinOrderByAggregateInputSchema';
import { QAPairSumOrderByAggregateInputSchema } from './QAPairSumOrderByAggregateInputSchema';

export const QAPairOrderByWithAggregationInputSchema: z.ZodType<Prisma.QAPairOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  secondaryLabel: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QAPairCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => QAPairAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QAPairMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QAPairMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => QAPairSumOrderByAggregateInputSchema).optional()
}).strict();

export default QAPairOrderByWithAggregationInputSchema;
