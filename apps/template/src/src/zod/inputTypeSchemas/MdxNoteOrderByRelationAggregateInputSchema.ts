import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MdxNoteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MdxNoteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MdxNoteOrderByRelationAggregateInputSchema;
