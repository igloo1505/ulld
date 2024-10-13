import {
  BibEntryUpdateManyWithoutBibNestedInputSchema
} from "./chunk-H6P6UUWA.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-UOPNXAZH.js.map