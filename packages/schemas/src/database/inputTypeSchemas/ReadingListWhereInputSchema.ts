import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema.js';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema.js';
import { IpynbListRelationFilterSchema } from './IpynbListRelationFilterSchema.js';
export const ReadingListWhereInputSchema: z.ZodType<Prisma.ReadingListWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReadingListWhereInputSchema),z.lazy(() => ReadingListWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReadingListWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReadingListWhereInputSchema),z.lazy(() => ReadingListWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastUpdate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bibEntries: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict();
export default ReadingListWhereInputSchema;