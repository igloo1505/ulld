import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreatecitationsListOrderInputSchema } from './IpynbCreatecitationsListOrderInputSchema';
import { IpynbCreateimportantValuesInputSchema } from './IpynbCreateimportantValuesInputSchema';
import { IpynbCreateoutgoingQuickLinksInputSchema } from './IpynbCreateoutgoingQuickLinksInputSchema';
import { TagCreateNestedManyWithoutIpynbNotesInputSchema } from './TagCreateNestedManyWithoutIpynbNotesInputSchema';
import { TopicCreateNestedManyWithoutIpynbNotesInputSchema } from './TopicCreateNestedManyWithoutIpynbNotesInputSchema';
import { SubjectCreateNestedManyWithoutIpynbNotesInputSchema } from './SubjectCreateNestedManyWithoutIpynbNotesInputSchema';
import { SequentialNoteListCreateNestedOneWithoutIpynbInputSchema } from './SequentialNoteListCreateNestedOneWithoutIpynbInputSchema';
import { ReadingListCreateNestedManyWithoutIpynbNotesInputSchema } from './ReadingListCreateNestedManyWithoutIpynbNotesInputSchema';

export const IpynbCreateWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbCreateWithoutCitationsInput> = z.object({
  rootRelativePath: z.string(),
  isProtected: z.boolean().optional().nullable(),
  title: z.string(),
  latexTitle: z.string().optional().nullable(),
  citationsListOrder: z.union([ z.lazy(() => IpynbCreatecitationsListOrderInputSchema),z.string().array() ]).optional(),
  importantValues: z.union([ z.lazy(() => IpynbCreateimportantValuesInputSchema),z.number().array() ]).optional(),
  href: z.string(),
  outgoingQuickLinks: z.union([ z.lazy(() => IpynbCreateoutgoingQuickLinksInputSchema),z.string().array() ]).optional(),
  raw: z.instanceof(Buffer),
  sequentialIndex: z.number().int().optional().nullable(),
  bookmarked: z.boolean().optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListCreateNestedOneWithoutIpynbInputSchema).optional(),
  readingList: z.lazy(() => ReadingListCreateNestedManyWithoutIpynbNotesInputSchema).optional()
}).strict();

export default IpynbCreateWithoutCitationsInputSchema;
