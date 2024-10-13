import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/ToDoListUpdateManyMutationInputSchema.ts
import { z } from "zod";
var ToDoListUpdateManyMutationInputSchema = z.object({
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ToDoListUpdateManyMutationInputSchema_default = ToDoListUpdateManyMutationInputSchema;

export {
  ToDoListUpdateManyMutationInputSchema,
  ToDoListUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-7ZXOI24M.js.map