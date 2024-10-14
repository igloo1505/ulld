import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-WKMKAR2K.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/SettingsAppendixUpdateInputSchema.ts
import { z } from "zod";
var SettingsAppendixUpdateInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SettingsAppendixUpdateInputSchema_default = SettingsAppendixUpdateInputSchema;

export {
  SettingsAppendixUpdateInputSchema,
  SettingsAppendixUpdateInputSchema_default
};
//# sourceMappingURL=chunk-JGDPM3L4.js.map