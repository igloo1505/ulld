import {
  DietUpdateManyWithoutItemsNestedInputSchema
} from "./chunk-MEILWKON.js";
import {
  ServingUpdateManyWithoutItemNestedInputSchema
} from "./chunk-SGCYKW7T.js";
import {
  FloatFieldUpdateOperationsInputSchema
} from "./chunk-IWZ75T2C.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GNOT4FVG.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-APCVB345.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-7KFMTKWN.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-QNZTDEPY.js.map