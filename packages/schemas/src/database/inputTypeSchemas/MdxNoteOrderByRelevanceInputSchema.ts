import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteOrderByRelevanceFieldEnumSchema } from './MdxNoteOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const MdxNoteOrderByRelevanceInputSchema: z.ZodType<Prisma.MdxNoteOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => MdxNoteOrderByRelevanceFieldEnumSchema),z.lazy(() => MdxNoteOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default MdxNoteOrderByRelevanceInputSchema;
