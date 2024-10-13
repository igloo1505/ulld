import {
  DietaryItemUncheckedUpdateWithoutServingInputSchema
} from "./chunk-QIQKPT3Z.js";
import {
  DietaryItemUpdateWithoutServingInputSchema
} from "./chunk-L6EJV2L7.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-SZILSGIL.js.map