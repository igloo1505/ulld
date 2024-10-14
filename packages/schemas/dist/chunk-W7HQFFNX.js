import {
  DietaryItemScalarWhereInputSchema
} from "./chunk-7YIVPRKS.js";
import {
  DietaryItemUncheckedUpdateManyWithoutDietInputSchema
} from "./chunk-VAFJKCVG.js";
import {
  DietaryItemUpdateManyMutationInputSchema
} from "./chunk-MOLTCIJR.js";

// src/database/inputTypeSchemas/DietaryItemUpdateManyWithWhereWithoutDietInputSchema.ts
import { z } from "zod";
var DietaryItemUpdateManyWithWhereWithoutDietInputSchema = z.object({
  where: z.lazy(() => DietaryItemScalarWhereInputSchema),
  data: z.union([z.lazy(() => DietaryItemUpdateManyMutationInputSchema), z.lazy(() => DietaryItemUncheckedUpdateManyWithoutDietInputSchema)])
}).strict();
var DietaryItemUpdateManyWithWhereWithoutDietInputSchema_default = DietaryItemUpdateManyWithWhereWithoutDietInputSchema;

export {
  DietaryItemUpdateManyWithWhereWithoutDietInputSchema,
  DietaryItemUpdateManyWithWhereWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-W7HQFFNX.js.map