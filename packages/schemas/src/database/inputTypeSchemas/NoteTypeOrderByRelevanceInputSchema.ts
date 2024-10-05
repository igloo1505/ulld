import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NoteTypeOrderByRelevanceFieldEnumSchema } from './NoteTypeOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const NoteTypeOrderByRelevanceInputSchema: z.ZodType<Prisma.NoteTypeOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => NoteTypeOrderByRelevanceFieldEnumSchema),z.lazy(() => NoteTypeOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default NoteTypeOrderByRelevanceInputSchema;
