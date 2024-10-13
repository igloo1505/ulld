import {
  DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema
} from "./chunk-PBYWS56X.js";
import {
  NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema
} from "./chunk-OS3IJGID.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GYXIQA26.js";

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
//# sourceMappingURL=chunk-FSL7DKGD.js.map