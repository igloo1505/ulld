import {
  DietaryItemUncheckedUpdateWithoutServingInputSchema
} from "./chunk-6QQLUQTC.js";
import {
  DietaryItemUpdateWithoutServingInputSchema
} from "./chunk-3AP7PT4P.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/inputTypeSchemas/DietaryItemUpdateToOneWithWhereWithoutServingInputSchema.ts
import { z } from "zod";
var DietaryItemUpdateToOneWithWhereWithoutServingInputSchema = z.object({
  where: z.lazy(() => DietaryItemWhereInputSchema).optional(),
  data: z.union([z.lazy(() => DietaryItemUpdateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema)])
}).strict();
var DietaryItemUpdateToOneWithWhereWithoutServingInputSchema_default = DietaryItemUpdateToOneWithWhereWithoutServingInputSchema;

export {
  DietaryItemUpdateToOneWithWhereWithoutServingInputSchema,
  DietaryItemUpdateToOneWithWhereWithoutServingInputSchema_default
};
//# sourceMappingURL=chunk-E4BZGDUR.js.map