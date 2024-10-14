import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/KanbanUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var KanbanUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var KanbanUncheckedUpdateManyInputSchema_default = KanbanUncheckedUpdateManyInputSchema;

export {
  KanbanUncheckedUpdateManyInputSchema,
  KanbanUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-ZGBD7U7C.js.map