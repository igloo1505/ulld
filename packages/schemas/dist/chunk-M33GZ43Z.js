import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SettingsAppendixUpdateManyMutationInputSchema.ts
import { z } from "zod";
var SettingsAppendixUpdateManyMutationInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SettingsAppendixUpdateManyMutationInputSchema_default = SettingsAppendixUpdateManyMutationInputSchema;

export {
  SettingsAppendixUpdateManyMutationInputSchema,
  SettingsAppendixUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-M33GZ43Z.js.map