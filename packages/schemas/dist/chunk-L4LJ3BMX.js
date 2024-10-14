import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/BibUncheckedUpdateWithoutEntriesInputSchema.ts
import { z } from "zod";
var BibUncheckedUpdateWithoutEntriesInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var BibUncheckedUpdateWithoutEntriesInputSchema_default = BibUncheckedUpdateWithoutEntriesInputSchema;

export {
  BibUncheckedUpdateWithoutEntriesInputSchema,
  BibUncheckedUpdateWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-L4LJ3BMX.js.map