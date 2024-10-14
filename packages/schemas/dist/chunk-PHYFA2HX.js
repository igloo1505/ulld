import {
  DietaryItemUpdateToOneWithWhereWithoutServingInputSchema
} from "./chunk-E4BZGDUR.js";
import {
  DietaryItemUpsertWithoutServingInputSchema
} from "./chunk-7RUF3PAZ.js";
import {
  DietaryItemUncheckedUpdateWithoutServingInputSchema
} from "./chunk-6QQLUQTC.js";
import {
  DietaryItemUpdateWithoutServingInputSchema
} from "./chunk-3AP7PT4P.js";
import {
  DietaryItemCreateOrConnectWithoutServingInputSchema
} from "./chunk-SWZKGCVR.js";
import {
  DietaryItemCreateWithoutServingInputSchema
} from "./chunk-FGGFKGPZ.js";
import {
  DietaryItemUncheckedCreateWithoutServingInputSchema
} from "./chunk-LUTNIQK7.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";

// src/database/inputTypeSchemas/DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema.ts
import { z } from "zod";
var DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema = z.object({
  create: z.union([z.lazy(() => DietaryItemCreateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  upsert: z.lazy(() => DietaryItemUpsertWithoutServingInputSchema).optional(),
  connect: z.lazy(() => DietaryItemWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => DietaryItemUpdateToOneWithWhereWithoutServingInputSchema), z.lazy(() => DietaryItemUpdateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema)]).optional()
}).strict();
var DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default = DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema;

export {
  DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema,
  DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default
};
//# sourceMappingURL=chunk-PHYFA2HX.js.map