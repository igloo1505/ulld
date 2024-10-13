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
//# sourceMappingURL=chunk-HFW6TIQ4.js.map