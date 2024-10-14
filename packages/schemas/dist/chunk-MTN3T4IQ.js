import {
  BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema,
  IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema,
  MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema
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

// src/database/inputTypeSchemas/ReadingListUncheckedUpdateInputSchema.ts
import { z } from "zod";
var ReadingListUncheckedUpdateInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();
var ReadingListUncheckedUpdateInputSchema_default = ReadingListUncheckedUpdateInputSchema;

export {
  ReadingListUncheckedUpdateInputSchema,
  ReadingListUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-MTN3T4IQ.js.map