import {
  DietaryItemCreateOrConnectWithoutDietInputSchema
} from "./chunk-K3IBRI57.js";
import {
  DietaryItemCreateWithoutDietInputSchema
} from "./chunk-75MQZDZM.js";
import {
  DietaryItemUncheckedCreateWithoutDietInputSchema
} from "./chunk-2W7FEZ6Q.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";

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
//# sourceMappingURL=chunk-WTMMB2NF.js.map