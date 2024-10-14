import {
  DietaryItemUncheckedUpdateWithoutDietInputSchema
} from "./chunk-HK4UERLG.js";
import {
  DietaryItemUpdateWithoutDietInputSchema
} from "./chunk-QQIGUFEQ.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";

// src/database/inputTypeSchemas/DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema.ts
import { z } from "zod";
var DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  data: z.union([z.lazy(() => DietaryItemUpdateWithoutDietInputSchema), z.lazy(() => DietaryItemUncheckedUpdateWithoutDietInputSchema)])
}).strict();
var DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema;

export {
  DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema,
  DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-25POSQDG.js.map