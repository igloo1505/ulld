import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { IpynbCountOrderByAggregateInputSchema } from './IpynbCountOrderByAggregateInputSchema';
import { IpynbAvgOrderByAggregateInputSchema } from './IpynbAvgOrderByAggregateInputSchema';
import { IpynbMaxOrderByAggregateInputSchema } from './IpynbMaxOrderByAggregateInputSchema';
import { IpynbMinOrderByAggregateInputSchema } from './IpynbMinOrderByAggregateInputSchema';
import { IpynbSumOrderByAggregateInputSchema } from './IpynbSumOrderByAggregateInputSchema';

export const IpynbOrderByWithAggregationInputSchema: z.ZodType<Prisma.IpynbOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  raw: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sequentialIndex: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IpynbCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IpynbAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IpynbMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IpynbMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IpynbSumOrderByAggregateInputSchema).optional()
}).strict();

export default IpynbOrderByWithAggregationInputSchema;
