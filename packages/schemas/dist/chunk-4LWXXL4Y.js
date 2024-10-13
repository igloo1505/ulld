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
//# sourceMappingURL=chunk-4LWXXL4Y.js.map