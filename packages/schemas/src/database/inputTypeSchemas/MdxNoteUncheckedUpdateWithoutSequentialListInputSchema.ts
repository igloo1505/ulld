import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { MdxNoteUpdatecitationsListOrderInputSchema } from './MdxNoteUpdatecitationsListOrderInputSchema';
import { MdxNoteUpdateimportantValuesInputSchema } from './MdxNoteUpdateimportantValuesInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { MdxNoteUpdateoutgoingQuickLinksInputSchema } from './MdxNoteUpdateoutgoingQuickLinksInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TopicUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from './TopicUncheckedUpdateManyWithoutMdxNotesNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema';
import { TagUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from './TagUncheckedUpdateManyWithoutMdxNotesNestedInputSchema';
import { BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema';
import { ReadingListUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from './ReadingListUncheckedUpdateManyWithoutMdxNotesNestedInputSchema';
import { EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from './EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema';
import { DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema } from './DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema';
import { ToDoUncheckedUpdateManyWithoutAssociatedNotesNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutAssociatedNotesNestedInputSchema';

export const MdxNoteUncheckedUpdateWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteUncheckedUpdateWithoutSequentialListInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
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
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  citations: z.lazy(() => BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  definitions: z.lazy(() => DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutAssociatedNotesNestedInputSchema).optional()
}).strict();

export default MdxNoteUncheckedUpdateWithoutSequentialListInputSchema;
