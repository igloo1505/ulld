import {
  DietCreateWithoutItemsInputSchema
} from "./chunk-IIB3L6LN.js";
import {
  DietUncheckedCreateWithoutItemsInputSchema
} from "./chunk-DJGYQYYB.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";

// src/database/inputTypeSchemas/DietCreateOrConnectWithoutItemsInputSchema.ts
import { z } from "zod";
var DietCreateOrConnectWithoutItemsInputSchema = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  create: z.union([z.lazy(() => DietCreateWithoutItemsInputSchema), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema)])
}).strict();
var DietCreateOrConnectWithoutItemsInputSchema_default = DietCreateOrConnectWithoutItemsInputSchema;

export {
  DietCreateOrConnectWithoutItemsInputSchema,
  DietCreateOrConnectWithoutItemsInputSchema_default
};
//# sourceMappingURL=chunk-QFKZXF66.js.map