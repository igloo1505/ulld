import {
  BibEntryUpdateManyWithoutReadingListNestedInputSchema,
  IpynbUpdateManyWithoutReadingListNestedInputSchema,
  MdxNoteUpdateManyWithoutReadingListNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/ReadingListUpdateInputSchema.ts
import { z } from "zod";
var ReadingListUpdateInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  bibEntries: z.lazy(() => BibEntryUpdateManyWithoutReadingListNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutReadingListNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();
var ReadingListUpdateInputSchema_default = ReadingListUpdateInputSchema;

export {
  ReadingListUpdateInputSchema,
  ReadingListUpdateInputSchema_default
};
//# sourceMappingURL=chunk-4TRFTXGS.js.map