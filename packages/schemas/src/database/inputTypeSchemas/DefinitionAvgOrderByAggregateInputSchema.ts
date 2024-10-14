import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DefinitionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DefinitionAvgOrderByAggregateInput> = z.object({
  mdxNoteId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DefinitionAvgOrderByAggregateInputSchema;
