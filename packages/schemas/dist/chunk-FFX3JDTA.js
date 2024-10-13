import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/BusinessContactUpdateManyMutationInputSchema.ts
import { z } from "zod";
var BusinessContactUpdateManyMutationInputSchema = z.object({
  companyName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contactName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contactPreference: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  purpose: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var BusinessContactUpdateManyMutationInputSchema_default = BusinessContactUpdateManyMutationInputSchema;

export {
  BusinessContactUpdateManyMutationInputSchema,
  BusinessContactUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-FFX3JDTA.js.map