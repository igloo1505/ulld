import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-V3R3XKVB.js.map