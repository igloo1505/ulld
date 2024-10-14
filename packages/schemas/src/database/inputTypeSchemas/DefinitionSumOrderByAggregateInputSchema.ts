import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DefinitionSumOrderByAggregateInputSchema: z.ZodType<Prisma.DefinitionSumOrderByAggregateInput> = z.object({
  mdxNoteId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DefinitionSumOrderByAggregateInputSchema;
