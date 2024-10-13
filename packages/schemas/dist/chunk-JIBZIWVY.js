import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/TagUpdateManyMutationInputSchema.ts
import { z } from "zod";
var TagUpdateManyMutationInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TagUpdateManyMutationInputSchema_default = TagUpdateManyMutationInputSchema;

export {
  TagUpdateManyMutationInputSchema,
  TagUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-JIBZIWVY.js.map