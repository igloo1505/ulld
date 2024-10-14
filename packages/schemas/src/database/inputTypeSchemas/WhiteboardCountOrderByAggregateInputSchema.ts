import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WhiteboardCountOrderByAggregateInputSchema: z.ZodType<Prisma.WhiteboardCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WhiteboardCountOrderByAggregateInputSchema;
