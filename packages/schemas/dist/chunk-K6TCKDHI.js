import {
  BibEntryUpdateManyWithoutBibNestedInputSchema
} from "./chunk-TL564M7S.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/BibUpdateInputSchema.ts
import { z } from "zod";
var BibUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  entries: z.lazy(() => BibEntryUpdateManyWithoutBibNestedInputSchema).optional()
}).strict();
var BibUpdateInputSchema_default = BibUpdateInputSchema;

export {
  BibUpdateInputSchema,
  BibUpdateInputSchema_default
};
//# sourceMappingURL=chunk-K6TCKDHI.js.map