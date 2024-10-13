import {
  BibEntryUpdateManyWithoutReadingListNestedInputSchema,
  IpynbUpdateManyWithoutReadingListNestedInputSchema,
  MdxNoteUpdateManyWithoutReadingListNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-4UZJYNGX.js.map