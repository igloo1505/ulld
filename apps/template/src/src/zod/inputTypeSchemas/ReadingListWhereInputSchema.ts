import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema';
import { IpynbListRelationFilterSchema } from './IpynbListRelationFilterSchema';

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
