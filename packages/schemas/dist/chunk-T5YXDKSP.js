import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/RandomImageUpdateManyMutationInputSchema.ts
import { z } from "zod";
var RandomImageUpdateManyMutationInputSchema = z.object({
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var RandomImageUpdateManyMutationInputSchema_default = RandomImageUpdateManyMutationInputSchema;

export {
  RandomImageUpdateManyMutationInputSchema,
  RandomImageUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-T5YXDKSP.js.map