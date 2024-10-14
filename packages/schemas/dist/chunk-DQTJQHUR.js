import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema.ts
import { z } from "zod";
var ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema_default = ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema;

export {
  ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema,
  ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema_default
};
//# sourceMappingURL=chunk-DQTJQHUR.js.map