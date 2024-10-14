import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EquationCountOrderByAggregateInputSchema } from './EquationCountOrderByAggregateInputSchema';
import { EquationAvgOrderByAggregateInputSchema } from './EquationAvgOrderByAggregateInputSchema';
import { EquationMaxOrderByAggregateInputSchema } from './EquationMaxOrderByAggregateInputSchema';
import { EquationMinOrderByAggregateInputSchema } from './EquationMinOrderByAggregateInputSchema';
import { EquationSumOrderByAggregateInputSchema } from './EquationSumOrderByAggregateInputSchema';

export const EquationOrderByWithAggregationInputSchema: z.ZodType<Prisma.EquationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  desc: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  asPython: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  variableLegend: z.lazy(() => SortOrderSchema).optional(),
  variables: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EquationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EquationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EquationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EquationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EquationSumOrderByAggregateInputSchema).optional()
}).strict();

export default EquationOrderByWithAggregationInputSchema;
