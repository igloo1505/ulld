import {
  NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema
} from "./chunk-P5ZWTHAL.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-LUUG3TNG.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GNOT4FVG.js";

// src/database/inputTypeSchemas/ServingUpdateManyMutationInputSchema.ts
import { z } from "zod";
var ServingUpdateManyMutationInputSchema = z.object({
  quant_oz: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  quant_guess: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ServingUpdateManyMutationInputSchema_default = ServingUpdateManyMutationInputSchema;

export {
  ServingUpdateManyMutationInputSchema,
  ServingUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-JVQHRCWA.js.map