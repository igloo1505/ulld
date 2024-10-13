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

// src/database/inputTypeSchemas/DietaryItemUpdateManyMutationInputSchema.ts
import { z } from "zod";
var DietaryItemUpdateManyMutationInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  barcode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  gi: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  calsPerOz: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  glutenFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  minimalFructose: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  natural: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  organic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  impactScore: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DietaryItemUpdateManyMutationInputSchema_default = DietaryItemUpdateManyMutationInputSchema;

export {
  DietaryItemUpdateManyMutationInputSchema,
  DietaryItemUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-EKE5CXKK.js.map