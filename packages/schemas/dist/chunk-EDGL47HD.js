import {
  BibEntryUpdateManyWithoutMdxNotesNestedInputSchema,
  EquationUpdateManyWithoutMdxNotesNestedInputSchema,
  ReadingListUpdateManyWithoutMdxNotesNestedInputSchema,
  SequentialNoteListUpdateOneWithoutMdxNoteNestedInputSchema,
  SubjectUpdateManyWithoutMdxNotesNestedInputSchema,
  TagUpdateManyWithoutMdxNotesNestedInputSchema,
  ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema,
  TopicUpdateManyWithoutMdxNotesNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  MdxNoteUpdateoutgoingQuickLinksInputSchema
} from "./chunk-RNPMLM3R.js";
import {
  MdxNoteUpdateimportantValuesInputSchema
} from "./chunk-PQC7BMWQ.js";
import {
  MdxNoteUpdatecitationsListOrderInputSchema
} from "./chunk-YYIYEQFH.js";
import {
  NullableBoolFieldUpdateOperationsInputSchema
} from "./chunk-6QCMPPTM.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GNOT4FVG.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-APCVB345.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/MdxNoteUpdateWithoutDefinitionsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateWithoutDefinitionsInputSchema = z.object({
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
  toDo: z.lazy(() => ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema).optional()
}).strict();
var MdxNoteUpdateWithoutDefinitionsInputSchema_default = MdxNoteUpdateWithoutDefinitionsInputSchema;

export {
  MdxNoteUpdateWithoutDefinitionsInputSchema,
  MdxNoteUpdateWithoutDefinitionsInputSchema_default
};
//# sourceMappingURL=chunk-EDGL47HD.js.map