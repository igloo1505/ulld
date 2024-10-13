import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { QAPairCountOrderByAggregateInputSchema } from '../QAPairCountOrderByAggregateInputSchema.js';
import { QAPairAvgOrderByAggregateInputSchema } from '../QAPairAvgOrderByAggregateInputSchema.js';
import { QAPairMaxOrderByAggregateInputSchema } from '../QAPairMaxOrderByAggregateInputSchema.js';
import { QAPairMinOrderByAggregateInputSchema } from '../QAPairMinOrderByAggregateInputSchema.js';
import { QAPairSumOrderByAggregateInputSchema } from '../QAPairSumOrderByAggregateInputSchema.js';
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