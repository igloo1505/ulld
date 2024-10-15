import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DefinitionSumOrderByAggregateInputSchema: z.ZodType<Prisma.DefinitionSumOrderByAggregateInput> = z.object({
  mdxNoteId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DefinitionSumOrderByAggregateInputSchema;