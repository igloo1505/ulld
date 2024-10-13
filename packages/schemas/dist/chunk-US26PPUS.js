import {
  BibEntryUpdateManyWithoutMdxNotesNestedInputSchema,
  EquationUpdateManyWithoutMdxNotesNestedInputSchema,
  ReadingListUpdateManyWithoutMdxNotesNestedInputSchema,
  SequentialNoteListUpdateOneWithoutMdxNoteNestedInputSchema,
  SubjectUpdateManyWithoutMdxNotesNestedInputSchema,
  TagUpdateManyWithoutMdxNotesNestedInputSchema,
  ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema,
  TopicUpdateManyWithoutMdxNotesNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  DefinitionUpdateManyWithoutMdxNoteNestedInputSchema
} from "./chunk-U7ZRWSF6.js";
import {
  MdxNoteUpdateoutgoingQuickLinksInputSchema
} from "./chunk-7IVVXO4A.js";
import {
  MdxNoteUpdateimportantValuesInputSchema
} from "./chunk-D6Q2DO5E.js";
import {
  MdxNoteUpdatecitationsListOrderInputSchema
} from "./chunk-GPH4MIFR.js";
import {
  NullableBoolFieldUpdateOperationsInputSchema
} from "./chunk-UVP5VBOQ.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GYXIQA26.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-RAFX4YSS.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/MdxNoteUpdateInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateInputSchema = z.object({
  isProtected: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)]).optional().nullable(),
  dietSummaryKey: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latexTitle: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  rootRelativePath: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  noteType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  formatted: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  summary: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  citationsListOrder: z.union([z.lazy(() => MdxNoteUpdatecitationsListOrderInputSchema), z.string().array()]).optional(),
  importantValues: z.union([z.lazy(() => MdxNoteUpdateimportantValuesInputSchema), z.number().array()]).optional(),
  imageSrc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  href: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sequentialIndex: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  floatImages: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  remoteUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  trackRemote: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  outgoingQuickLinks: z.union([z.lazy(() => MdxNoteUpdateoutgoingQuickLinksInputSchema), z.string().array()]).optional(),
  quickLink: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  citations: z.lazy(() => BibEntryUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListUpdateOneWithoutMdxNoteNestedInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  definitions: z.lazy(() => DefinitionUpdateManyWithoutMdxNoteNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema).optional()
}).strict();
var MdxNoteUpdateInputSchema_default = MdxNoteUpdateInputSchema;

export {
  MdxNoteUpdateInputSchema,
  MdxNoteUpdateInputSchema_default
};
//# sourceMappingURL=chunk-US26PPUS.js.map