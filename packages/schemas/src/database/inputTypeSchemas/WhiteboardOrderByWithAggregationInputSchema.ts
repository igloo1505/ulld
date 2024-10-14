import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WhiteboardCountOrderByAggregateInputSchema } from './WhiteboardCountOrderByAggregateInputSchema';
import { WhiteboardMaxOrderByAggregateInputSchema } from './WhiteboardMaxOrderByAggregateInputSchema';
import { WhiteboardMinOrderByAggregateInputSchema } from './WhiteboardMinOrderByAggregateInputSchema';

export const WhiteboardOrderByWithAggregationInputSchema: z.ZodType<Prisma.WhiteboardOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WhiteboardCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WhiteboardMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WhiteboardMinOrderByAggregateInputSchema).optional()
}).strict();

export default WhiteboardOrderByWithAggregationInputSchema;
