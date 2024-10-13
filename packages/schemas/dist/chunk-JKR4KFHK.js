import {
  NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema
} from "./chunk-OS3IJGID.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GYXIQA26.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/ServingUncheckedUpdateWithoutItemInputSchema.ts
import { z } from "zod";
var ServingUncheckedUpdateWithoutItemInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  quant_oz: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  quant_guess: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ServingUncheckedUpdateWithoutItemInputSchema_default = ServingUncheckedUpdateWithoutItemInputSchema;

export {
  ServingUncheckedUpdateWithoutItemInputSchema,
  ServingUncheckedUpdateWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-JKR4KFHK.js.map