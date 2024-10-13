import {
  DietaryItemUncheckedUpdateWithoutDietInputSchema
} from "./chunk-JT2WDSZ2.js";
import {
  DietaryItemUpdateWithoutDietInputSchema
} from "./chunk-4UU5RGQC.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";

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
//# sourceMappingURL=chunk-UGBPRQXV.js.map