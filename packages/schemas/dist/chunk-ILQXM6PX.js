import {
  DietaryItemUncheckedUpdateWithoutDietInputSchema
} from "./chunk-HK4UERLG.js";
import {
  DietaryItemUpdateWithoutDietInputSchema
} from "./chunk-QQIGUFEQ.js";
import {
  DietaryItemCreateWithoutDietInputSchema
} from "./chunk-DOUQ3YIS.js";
import {
  DietaryItemUncheckedCreateWithoutDietInputSchema
} from "./chunk-FHWIZJB2.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";

// src/database/inputTypeSchemas/DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema.ts
import { z } from "zod";
var DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  update: z.union([z.lazy(() => DietaryItemUpdateWithoutDietInputSchema), z.lazy(() => DietaryItemUncheckedUpdateWithoutDietInputSchema)]),
  create: z.union([z.lazy(() => DietaryItemCreateWithoutDietInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema)])
}).strict();
var DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema;

export {
  DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema,
  DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-ILQXM6PX.js.map