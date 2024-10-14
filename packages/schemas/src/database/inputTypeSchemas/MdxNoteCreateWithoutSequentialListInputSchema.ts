import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreatecitationsListOrderInputSchema } from './MdxNoteCreatecitationsListOrderInputSchema';
import { MdxNoteCreateimportantValuesInputSchema } from './MdxNoteCreateimportantValuesInputSchema';
import { MdxNoteCreateoutgoingQuickLinksInputSchema } from './MdxNoteCreateoutgoingQuickLinksInputSchema';
import { TopicCreateNestedManyWithoutMdxNotesInputSchema } from './TopicCreateNestedManyWithoutMdxNotesInputSchema';
import { SubjectCreateNestedManyWithoutMdxNotesInputSchema } from './SubjectCreateNestedManyWithoutMdxNotesInputSchema';
import { TagCreateNestedManyWithoutMdxNotesInputSchema } from './TagCreateNestedManyWithoutMdxNotesInputSchema';
import { BibEntryCreateNestedManyWithoutMdxNotesInputSchema } from './BibEntryCreateNestedManyWithoutMdxNotesInputSchema';
import { ReadingListCreateNestedManyWithoutMdxNotesInputSchema } from './ReadingListCreateNestedManyWithoutMdxNotesInputSchema';
import { EquationCreateNestedManyWithoutMdxNotesInputSchema } from './EquationCreateNestedManyWithoutMdxNotesInputSchema';
import { DefinitionCreateNestedManyWithoutMdxNoteInputSchema } from './DefinitionCreateNestedManyWithoutMdxNoteInputSchema';
import { ToDoCreateNestedManyWithoutAssociatedNotesInputSchema } from './ToDoCreateNestedManyWithoutAssociatedNotesInputSchema';

export const MdxNoteCreateWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteCreateWithoutSequentialListInput> = z.object({
  isProtected: z.boolean().optional().nullable(),
  dietSummaryKey: z.string().optional().nullable(),
  title: z.string(),
  latexTitle: z.string().optional().nullable(),
  rootRelativePath: z.string(),
  noteType: z.string(),
  content: z.string(),
  formatted: z.string().optional().nullable(),
  summary: z.string().optional().nullable(),
  citationsListOrder: z.union([ z.lazy(() => MdxNoteCreatecitationsListOrderInputSchema),z.string().array() ]).optional(),
  importantValues: z.union([ z.lazy(() => MdxNoteCreateimportantValuesInputSchema),z.number().array() ]).optional(),
  imageSrc: z.string().optional().nullable(),
  href: z.string(),
  sequentialIndex: z.number().optional().nullable(),
  floatImages: z.boolean().optional(),
  remoteUrl: z.string().optional().nullable(),
  trackRemote: z.boolean().optional(),
  outgoingQuickLinks: z.union([ z.lazy(() => MdxNoteCreateoutgoingQuickLinksInputSchema),z.string().array() ]).optional(),
  quickLink: z.string().optional().nullable(),
  bookmarked: z.boolean().optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  citations: z.lazy(() => BibEntryCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  definitions: z.lazy(() => DefinitionCreateNestedManyWithoutMdxNoteInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutAssociatedNotesInputSchema).optional()
}).strict();

export default MdxNoteCreateWithoutSequentialListInputSchema;
