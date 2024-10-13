import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/TopicUpdateManyMutationInputSchema.ts
import { z } from "zod";
var TopicUpdateManyMutationInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TopicUpdateManyMutationInputSchema_default = TopicUpdateManyMutationInputSchema;

export {
  TopicUpdateManyMutationInputSchema,
  TopicUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-DKW6L6LM.js.map