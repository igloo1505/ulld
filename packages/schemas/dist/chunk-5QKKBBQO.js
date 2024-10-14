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

// src/database/inputTypeSchemas/DietaryItemCreateNestedManyWithoutDietInputSchema.ts
import { z } from "zod";
var DietaryItemCreateNestedManyWithoutDietInputSchema = z.object({
  create: z.union([z.lazy(() => DietaryItemCreateWithoutDietInputSchema), z.lazy(() => DietaryItemCreateWithoutDietInputSchema).array(), z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema), z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DietaryItemWhereUniqueInputSchema), z.lazy(() => DietaryItemWhereUniqueInputSchema).array()]).optional()
}).strict();
var DietaryItemCreateNestedManyWithoutDietInputSchema_default = DietaryItemCreateNestedManyWithoutDietInputSchema;

export {
  DietaryItemCreateNestedManyWithoutDietInputSchema,
  DietaryItemCreateNestedManyWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-5QKKBBQO.js.map