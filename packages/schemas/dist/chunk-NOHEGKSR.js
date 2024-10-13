import {
  DietCreateOrConnectWithoutItemsInputSchema
} from "./chunk-QFKZXF66.js";
import {
  DietCreateWithoutItemsInputSchema
} from "./chunk-IIB3L6LN.js";
import {
  DietUncheckedCreateWithoutItemsInputSchema
} from "./chunk-DJGYQYYB.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";

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
//# sourceMappingURL=chunk-NOHEGKSR.js.map