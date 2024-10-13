import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-LD3EBDDH.js.map