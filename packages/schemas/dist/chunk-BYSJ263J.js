import {
  NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema
} from "./chunk-OS3IJGID.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GYXIQA26.js";

// src/database/inputTypeSchemas/ServingUpdateWithoutItemInputSchema.ts
import { z } from "zod";
var ServingUpdateWithoutItemInputSchema = z.object({
  quant_oz: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  quant_guess: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ServingUpdateWithoutItemInputSchema_default = ServingUpdateWithoutItemInputSchema;

export {
  ServingUpdateWithoutItemInputSchema,
  ServingUpdateWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-BYSJ263J.js.map