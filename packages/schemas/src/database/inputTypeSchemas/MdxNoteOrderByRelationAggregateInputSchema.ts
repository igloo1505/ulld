import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const MdxNoteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MdxNoteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default MdxNoteOrderByRelationAggregateInputSchema;