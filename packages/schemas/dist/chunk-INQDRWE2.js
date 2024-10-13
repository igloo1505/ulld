import {
  BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema
} from "./chunk-FBH7DHKL.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/BibUncheckedUpdateInputSchema.ts
import { z } from "zod";
var BibUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  entries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema).optional()
}).strict();
var BibUncheckedUpdateInputSchema_default = BibUncheckedUpdateInputSchema;

export {
  BibUncheckedUpdateInputSchema,
  BibUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-INQDRWE2.js.map