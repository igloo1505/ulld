import {
  DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema
} from "./chunk-PHYFA2HX.js";
import {
  NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema
} from "./chunk-P5ZWTHAL.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-LUUG3TNG.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GNOT4FVG.js";

// src/database/inputTypeSchemas/ServingUpdateInputSchema.ts
import { z } from "zod";
var ServingUpdateInputSchema = z.object({
  quant_oz: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  quant_guess: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable(),
  item: z.lazy(() => DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema).optional()
}).strict();
var ServingUpdateInputSchema_default = ServingUpdateInputSchema;

export {
  ServingUpdateInputSchema,
  ServingUpdateInputSchema_default
};
//# sourceMappingURL=chunk-JWV3HRGO.js.map