import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-GTZXPOVP.js.map