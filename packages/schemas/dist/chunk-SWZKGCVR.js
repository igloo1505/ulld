import {
  DietaryItemCreateWithoutServingInputSchema
} from "./chunk-FGGFKGPZ.js";
import {
  DietaryItemUncheckedCreateWithoutServingInputSchema
} from "./chunk-LUTNIQK7.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";

// src/database/inputTypeSchemas/DietaryItemCreateOrConnectWithoutServingInputSchema.ts
import { z } from "zod";
var DietaryItemCreateOrConnectWithoutServingInputSchema = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  create: z.union([z.lazy(() => DietaryItemCreateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema)])
}).strict();
var DietaryItemCreateOrConnectWithoutServingInputSchema_default = DietaryItemCreateOrConnectWithoutServingInputSchema;

export {
  DietaryItemCreateOrConnectWithoutServingInputSchema,
  DietaryItemCreateOrConnectWithoutServingInputSchema_default
};
//# sourceMappingURL=chunk-SWZKGCVR.js.map