import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SettingsAppendixUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var SettingsAppendixUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SettingsAppendixUncheckedUpdateManyInputSchema_default = SettingsAppendixUncheckedUpdateManyInputSchema;

export {
  SettingsAppendixUncheckedUpdateManyInputSchema,
  SettingsAppendixUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-ATKVD2GZ.js.map