import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/BibUpdateWithoutEntriesInputSchema.ts
import { z } from "zod";
var BibUpdateWithoutEntriesInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var BibUpdateWithoutEntriesInputSchema_default = BibUpdateWithoutEntriesInputSchema;

export {
  BibUpdateWithoutEntriesInputSchema,
  BibUpdateWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-E7XCHBZ5.js.map