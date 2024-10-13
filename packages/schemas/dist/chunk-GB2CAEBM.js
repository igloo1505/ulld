import {
  NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema
} from "./chunk-OS3IJGID.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GYXIQA26.js";

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
//# sourceMappingURL=chunk-GB2CAEBM.js.map