import {
  DietCreateWithoutItemsInputSchema
} from "./chunk-IK3W7FQY.js";
import {
  DietUncheckedCreateWithoutItemsInputSchema
} from "./chunk-IPNOD4Y4.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";

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
//# sourceMappingURL=chunk-3WGE7XFQ.js.map