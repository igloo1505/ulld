import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const DefinitionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DefinitionAvgOrderByAggregateInput> = z.object({
  mdxNoteId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DefinitionAvgOrderByAggregateInputSchema;