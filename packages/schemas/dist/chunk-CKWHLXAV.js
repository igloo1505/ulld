import {
  NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema
} from "./chunk-P5ZWTHAL.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-LUUG3TNG.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GNOT4FVG.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

// src/database/inputTypeSchemas/ServingUncheckedUpdateManyWithoutItemInputSchema.ts
import { z } from "zod";
var ServingUncheckedUpdateManyWithoutItemInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  quant_oz: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  quant_guess: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ServingUncheckedUpdateManyWithoutItemInputSchema_default = ServingUncheckedUpdateManyWithoutItemInputSchema;

export {
  ServingUncheckedUpdateManyWithoutItemInputSchema,
  ServingUncheckedUpdateManyWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-CKWHLXAV.js.map