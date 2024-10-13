import {
  DietaryItemCreateWithoutDietInputSchema
} from "./chunk-75MQZDZM.js";
import {
  DietaryItemUncheckedCreateWithoutDietInputSchema
} from "./chunk-2W7FEZ6Q.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";

// src/database/inputTypeSchemas/DietaryItemCreateOrConnectWithoutDietInputSchema.ts
import { z } from "zod";
var DietaryItemCreateOrConnectWithoutDietInputSchema = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  create: z.union([z.lazy(() => DietaryItemCreateWithoutDietInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema)])
}).strict();
var DietaryItemCreateOrConnectWithoutDietInputSchema_default = DietaryItemCreateOrConnectWithoutDietInputSchema;

export {
  DietaryItemCreateOrConnectWithoutDietInputSchema,
  DietaryItemCreateOrConnectWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-K3IBRI57.js.map