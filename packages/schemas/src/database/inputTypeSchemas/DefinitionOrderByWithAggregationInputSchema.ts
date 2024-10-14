import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DefinitionCountOrderByAggregateInputSchema } from './DefinitionCountOrderByAggregateInputSchema';
import { DefinitionAvgOrderByAggregateInputSchema } from './DefinitionAvgOrderByAggregateInputSchema';
import { DefinitionMaxOrderByAggregateInputSchema } from './DefinitionMaxOrderByAggregateInputSchema';
import { DefinitionMinOrderByAggregateInputSchema } from './DefinitionMinOrderByAggregateInputSchema';
import { DefinitionSumOrderByAggregateInputSchema } from './DefinitionSumOrderByAggregateInputSchema';

export const DefinitionOrderByWithAggregationInputSchema: z.ZodType<Prisma.DefinitionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  content: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  alphabeticalLabel: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mdxNoteId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DefinitionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DefinitionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DefinitionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DefinitionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DefinitionSumOrderByAggregateInputSchema).optional()
}).strict();

export default DefinitionOrderByWithAggregationInputSchema;
