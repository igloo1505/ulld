import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdatecitationsListOrderInputSchema } from './MdxNoteUpdatecitationsListOrderInputSchema.js';
import { MdxNoteUpdateimportantValuesInputSchema } from './MdxNoteUpdateimportantValuesInputSchema.js';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema.js';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdateoutgoingQuickLinksInputSchema } from './MdxNoteUpdateoutgoingQuickLinksInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { TopicUpdateManyWithoutMdxNotesNestedInputSchema } from './TopicUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { TagUpdateManyWithoutMdxNotesNestedInputSchema } from './TagUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { BibEntryUpdateManyWithoutMdxNotesNestedInputSchema } from './BibEntryUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { SequentialNoteListUpdateOneWithoutMdxNoteNestedInputSchema } from './SequentialNoteListUpdateOneWithoutMdxNoteNestedInputSchema.js';
import { ReadingListUpdateManyWithoutMdxNotesNestedInputSchema } from './ReadingListUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { EquationUpdateManyWithoutMdxNotesNestedInputSchema } from './EquationUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { DefinitionUpdateManyWithoutMdxNoteNestedInputSchema } from './DefinitionUpdateManyWithoutMdxNoteNestedInputSchema.js';
import { ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema } from './ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema.js';
export const MdxNoteUpdateWithoutSubjectsInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithoutSubjectsInput> = z.object({
  isProtected: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dietSummaryKey: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  latexTitle: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rootRelativePath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noteType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formatted: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  summary: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  citationsListOrder: z.union([ z.lazy(() => MdxNoteUpdatecitationsListOrderInputSchema),z.string().array() ]).optional(),
  importantValues: z.union([ z.lazy(() => MdxNoteUpdateimportantValuesInputSchema),z.number().array() ]).optional(),
  imageSrc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sequentialIndex: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  floatImages: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  remoteUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  trackRemote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  outgoingQuickLinks: z.union([ z.lazy(() => MdxNoteUpdateoutgoingQuickLinksInputSchema),z.string().array() ]).optional(),
  quickLink: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bookmarked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  firstSync: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSync: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  citations: z.lazy(() => BibEntryUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListUpdateOneWithoutMdxNoteNestedInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  definitions: z.lazy(() => DefinitionUpdateManyWithoutMdxNoteNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema).optional()
}).strict();
export default MdxNoteUpdateWithoutSubjectsInputSchema;