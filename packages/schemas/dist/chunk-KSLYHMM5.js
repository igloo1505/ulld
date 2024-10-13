import {
  DietaryItemUncheckedUpdateWithoutDietInputSchema
} from "./chunk-JT2WDSZ2.js";
import {
  DietaryItemUpdateWithoutDietInputSchema
} from "./chunk-4UU5RGQC.js";
import {
  DietaryItemCreateWithoutDietInputSchema
} from "./chunk-75MQZDZM.js";
import {
  DietaryItemUncheckedCreateWithoutDietInputSchema
} from "./chunk-2W7FEZ6Q.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";

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
//# sourceMappingURL=chunk-KSLYHMM5.js.map