import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/KanbanUpdateManyMutationInputSchema.ts
import { z } from "zod";
var KanbanUpdateManyMutationInputSchema = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var KanbanUpdateManyMutationInputSchema_default = KanbanUpdateManyMutationInputSchema;

export {
  KanbanUpdateManyMutationInputSchema,
  KanbanUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-UP2N3PLT.js.map