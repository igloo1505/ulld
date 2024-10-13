import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreatecitationsListOrderInputSchema } from '../MdxNoteCreatecitationsListOrderInputSchema.js';
import { MdxNoteCreateimportantValuesInputSchema } from '../MdxNoteCreateimportantValuesInputSchema.js';
import { MdxNoteCreateoutgoingQuickLinksInputSchema } from '../MdxNoteCreateoutgoingQuickLinksInputSchema.js';
import { TopicUncheckedCreateNestedManyWithoutMdxNotesInputSchema } from '../TopicUncheckedCreateNestedManyWithoutMdxNotesInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutMdxNotesInputSchema } from '../SubjectUncheckedCreateNestedManyWithoutMdxNotesInputSchema.js';
import { TagUncheckedCreateNestedManyWithoutMdxNotesInputSchema } from '../TagUncheckedCreateNestedManyWithoutMdxNotesInputSchema.js';
import { BibEntryUncheckedCreateNestedManyWithoutMdxNotesInputSchema } from '../BibEntryUncheckedCreateNestedManyWithoutMdxNotesInputSchema.js';
import { EquationUncheckedCreateNestedManyWithoutMdxNotesInputSchema } from '../EquationUncheckedCreateNestedManyWithoutMdxNotesInputSchema.js';
import { DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema } from '../DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema.js';
import { ToDoUncheckedCreateNestedManyWithoutAssociatedNotesInputSchema } from '../ToDoUncheckedCreateNestedManyWithoutAssociatedNotesInputSchema.js';
export const MdxNoteUncheckedCreateWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteUncheckedCreateWithoutReadingListInput> = z.object({
  id: z.number().int().optional(),
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
  sequentialKey: z.string().optional().nullable(),
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
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  citations: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutMdxNotesInputSchema).optional(),
  definitions: z.lazy(() => DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutAssociatedNotesInputSchema).optional()
}).strict();
export default MdxNoteUncheckedCreateWithoutReadingListInputSchema;