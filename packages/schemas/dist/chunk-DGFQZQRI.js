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

// src/database/inputTypeSchemas/DietUncheckedCreateNestedManyWithoutItemsInputSchema.ts
import { z } from "zod";
var DietUncheckedCreateNestedManyWithoutItemsInputSchema = z.object({
  create: z.union([z.lazy(() => DietCreateWithoutItemsInputSchema), z.lazy(() => DietCreateWithoutItemsInputSchema).array(), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema), z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DietWhereUniqueInputSchema), z.lazy(() => DietWhereUniqueInputSchema).array()]).optional()
}).strict();
var DietUncheckedCreateNestedManyWithoutItemsInputSchema_default = DietUncheckedCreateNestedManyWithoutItemsInputSchema;

export {
  DietUncheckedCreateNestedManyWithoutItemsInputSchema,
  DietUncheckedCreateNestedManyWithoutItemsInputSchema_default
};
//# sourceMappingURL=chunk-DGFQZQRI.js.map