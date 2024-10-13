import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SubjectUpdateManyMutationInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyMutationInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SubjectUpdateManyMutationInputSchema_default = SubjectUpdateManyMutationInputSchema;

export {
  SubjectUpdateManyMutationInputSchema,
  SubjectUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-4BUUQXQR.js.map