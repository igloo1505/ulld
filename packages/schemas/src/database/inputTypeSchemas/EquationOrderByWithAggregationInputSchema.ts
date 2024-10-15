import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { EquationCountOrderByAggregateInputSchema } from './EquationCountOrderByAggregateInputSchema.js';
import { EquationAvgOrderByAggregateInputSchema } from './EquationAvgOrderByAggregateInputSchema.js';
import { EquationMaxOrderByAggregateInputSchema } from './EquationMaxOrderByAggregateInputSchema.js';
import { EquationMinOrderByAggregateInputSchema } from './EquationMinOrderByAggregateInputSchema.js';
import { EquationSumOrderByAggregateInputSchema } from './EquationSumOrderByAggregateInputSchema.js';
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