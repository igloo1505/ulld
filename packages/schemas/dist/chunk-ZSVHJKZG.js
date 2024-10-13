import {
  BibEntryUpdateManyWithoutIpynbNotesNestedInputSchema,
  ReadingListUpdateManyWithoutIpynbNotesNestedInputSchema,
  SequentialNoteListUpdateOneWithoutIpynbNestedInputSchema,
  SubjectUpdateManyWithoutIpynbNotesNestedInputSchema,
  TagUpdateManyWithoutIpynbNotesNestedInputSchema,
  TopicUpdateManyWithoutIpynbNotesNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  IpynbUpdateoutgoingQuickLinksInputSchema
} from "./chunk-RKEDHJYD.js";
import {
  IpynbUpdateimportantValuesInputSchema
} from "./chunk-AT3H7AWO.js";
import {
  IpynbUpdatecitationsListOrderInputSchema
} from "./chunk-LQ5OCKKD.js";
import {
  NullableBoolFieldUpdateOperationsInputSchema
} from "./chunk-UVP5VBOQ.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-RAFX4YSS.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/IpynbUpdateInputSchema.ts
import { z } from "zod";
var IpynbUpdateInputSchema = z.object({
  rootRelativePath: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isProtected: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latexTitle: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  citationsListOrder: z.union([z.lazy(() => IpynbUpdatecitationsListOrderInputSchema), z.string().array()]).optional(),
  importantValues: z.union([z.lazy(() => IpynbUpdateimportantValuesInputSchema), z.number().array()]).optional(),
  href: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  outgoingQuickLinks: z.union([z.lazy(() => IpynbUpdateoutgoingQuickLinksInputSchema), z.string().array()]).optional(),
  raw: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional(),
  sequentialIndex: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  citations: z.lazy(() => BibEntryUpdateManyWithoutIpynbNotesNestedInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListUpdateOneWithoutIpynbNestedInputSchema).optional(),
  readingList: z.lazy(() => ReadingListUpdateManyWithoutIpynbNotesNestedInputSchema).optional()
}).strict();
var IpynbUpdateInputSchema_default = IpynbUpdateInputSchema;

export {
  IpynbUpdateInputSchema,
  IpynbUpdateInputSchema_default
};
//# sourceMappingURL=chunk-ZSVHJKZG.js.map