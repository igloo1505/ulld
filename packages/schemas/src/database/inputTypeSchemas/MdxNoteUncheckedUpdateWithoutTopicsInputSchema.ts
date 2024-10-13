import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { NullableBoolFieldUpdateOperationsInputSchema } from '../NullableBoolFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdatecitationsListOrderInputSchema } from '../MdxNoteUpdatecitationsListOrderInputSchema.js';
import { MdxNoteUpdateimportantValuesInputSchema } from '../MdxNoteUpdateimportantValuesInputSchema.js';
import { NullableFloatFieldUpdateOperationsInputSchema } from '../NullableFloatFieldUpdateOperationsInputSchema.js';
import { BoolFieldUpdateOperationsInputSchema } from '../BoolFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdateoutgoingQuickLinksInputSchema } from '../MdxNoteUpdateoutgoingQuickLinksInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from '../SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { TagUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from '../TagUncheckedUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from '../BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { ReadingListUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from '../ReadingListUncheckedUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema } from '../EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema.js';
import { DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema } from '../DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutAssociatedNotesNestedInputSchema } from '../ToDoUncheckedUpdateManyWithoutAssociatedNotesNestedInputSchema.js';
export const MdxNoteUncheckedUpdateWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteUncheckedUpdateWithoutTopicsInput> = z.object({
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
  sequentialKey: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  citations: z.lazy(() => BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  definitions: z.lazy(() => DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutAssociatedNotesNestedInputSchema).optional()
}).strict();
export default MdxNoteUncheckedUpdateWithoutTopicsInputSchema;