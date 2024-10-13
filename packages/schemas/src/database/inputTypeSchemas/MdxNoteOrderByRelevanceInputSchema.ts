import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteOrderByRelevanceFieldEnumSchema } from '../MdxNoteOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const MdxNoteOrderByRelevanceInputSchema: z.ZodType<Prisma.MdxNoteOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => MdxNoteOrderByRelevanceFieldEnumSchema),z.lazy(() => MdxNoteOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default MdxNoteOrderByRelevanceInputSchema;