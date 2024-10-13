import {
  DietUpdateManyWithoutItemsNestedInputSchema
} from "./chunk-2B3MJJJK.js";
import {
  ServingUpdateManyWithoutItemNestedInputSchema
} from "./chunk-7YO4425I.js";
import {
  FloatFieldUpdateOperationsInputSchema
} from "./chunk-ZJLZLGPF.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GYXIQA26.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-RAFX4YSS.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/DietaryItemUpdateInputSchema.ts
import { z } from "zod";
var DietaryItemUpdateInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  barcode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  gi: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  calsPerOz: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  glutenFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  minimalFructose: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  natural: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  organic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  impactScore: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  Diet: z.lazy(() => DietUpdateManyWithoutItemsNestedInputSchema).optional(),
  Serving: z.lazy(() => ServingUpdateManyWithoutItemNestedInputSchema).optional()
}).strict();
var DietaryItemUpdateInputSchema_default = DietaryItemUpdateInputSchema;

export {
  DietaryItemUpdateInputSchema,
  DietaryItemUpdateInputSchema_default
};
//# sourceMappingURL=chunk-VCV52QIC.js.map