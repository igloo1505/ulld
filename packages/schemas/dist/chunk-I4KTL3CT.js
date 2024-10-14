import {
  DietaryItemCreateWithoutDietInputSchema
} from "./chunk-DOUQ3YIS.js";
import {
  DietaryItemUncheckedCreateWithoutDietInputSchema
} from "./chunk-FHWIZJB2.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";

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
//# sourceMappingURL=chunk-I4KTL3CT.js.map