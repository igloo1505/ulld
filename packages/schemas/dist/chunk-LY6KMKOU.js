import {
  DietaryItemScalarWhereInputSchema
} from "./chunk-Z3DHIJO5.js";
import {
  DietaryItemUncheckedUpdateManyWithoutDietInputSchema
} from "./chunk-JFCCWQD7.js";
import {
  DietaryItemUpdateManyMutationInputSchema
} from "./chunk-EKE5CXKK.js";

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
//# sourceMappingURL=chunk-LY6KMKOU.js.map