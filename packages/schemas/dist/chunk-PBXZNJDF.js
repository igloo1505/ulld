import {
  DietCreateOrConnectWithoutItemsInputSchema
} from "./chunk-3WGE7XFQ.js";
import {
  DietCreateWithoutItemsInputSchema
} from "./chunk-IK3W7FQY.js";
import {
  DietUncheckedCreateWithoutItemsInputSchema
} from "./chunk-IPNOD4Y4.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";

// src/database/inputTypeSchemas/DietCreateNestedManyWithoutItemsInputSchema.ts
import { z } from "zod";
var DietCreateNestedManyWithoutItemsInputSchema = z.object({
  create: z.union([z.lazy(() => DietCreateWithoutItemsInputSchema), z.lazy(() => DietCreateWithoutItemsInputSchema).array(), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema), z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DietWhereUniqueInputSchema), z.lazy(() => DietWhereUniqueInputSchema).array()]).optional()
}).strict();
var DietCreateNestedManyWithoutItemsInputSchema_default = DietCreateNestedManyWithoutItemsInputSchema;

export {
  DietCreateNestedManyWithoutItemsInputSchema,
  DietCreateNestedManyWithoutItemsInputSchema_default
};
//# sourceMappingURL=chunk-PBXZNJDF.js.map