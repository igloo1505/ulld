import {
  DietaryItemCreateOrConnectWithoutDietInputSchema
} from "./chunk-I4KTL3CT.js";
import {
  DietaryItemCreateWithoutDietInputSchema
} from "./chunk-DOUQ3YIS.js";
import {
  DietaryItemUncheckedCreateWithoutDietInputSchema
} from "./chunk-FHWIZJB2.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";

// src/database/inputTypeSchemas/DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema.ts
import { z } from "zod";
var DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema = z.object({
  create: z.union([z.lazy(() => DietaryItemCreateWithoutDietInputSchema), z.lazy(() => DietaryItemCreateWithoutDietInputSchema).array(), z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema), z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DietaryItemWhereUniqueInputSchema), z.lazy(() => DietaryItemWhereUniqueInputSchema).array()]).optional()
}).strict();
var DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema_default = DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema;

export {
  DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema,
  DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-DPS2VAKH.js.map