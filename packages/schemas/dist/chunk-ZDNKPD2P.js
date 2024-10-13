import {
  DietaryItemCreateWithoutServingInputSchema
} from "./chunk-3BY65Z73.js";
import {
  DietaryItemUncheckedCreateWithoutServingInputSchema
} from "./chunk-XMDAQLVI.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";

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
//# sourceMappingURL=chunk-ZDNKPD2P.js.map