import {
  NullableEnumTaskCategoryFieldUpdateOperationsInputSchema
} from "./chunk-Y5EUL3TW.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-APCVB345.js";
import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-FYUHI5X3.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  TaskCategorySchema
} from "./chunk-T4CHWTHS.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/ToDoUpdateManyMutationInputSchema.ts
import { z } from "zod";
var ToDoUpdateManyMutationInputSchema = z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  task: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  dueAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  category: z.union([z.lazy(() => TaskCategorySchema), z.lazy(() => NullableEnumTaskCategoryFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  priority: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  completedOn: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ToDoUpdateManyMutationInputSchema_default = ToDoUpdateManyMutationInputSchema;

export {
  ToDoUpdateManyMutationInputSchema,
  ToDoUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-MYRHKTSP.js.map