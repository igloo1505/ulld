import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListOrderByRelevanceFieldEnumSchema } from './SequentialNoteListOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SequentialNoteListOrderByRelevanceInputSchema: z.ZodType<Prisma.SequentialNoteListOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SequentialNoteListOrderByRelevanceFieldEnumSchema),z.lazy(() => SequentialNoteListOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SequentialNoteListOrderByRelevanceInputSchema;
