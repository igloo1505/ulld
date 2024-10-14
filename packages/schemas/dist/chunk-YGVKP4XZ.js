import {
  DietUncheckedUpdateWithoutItemsInputSchema
} from "./chunk-LJY32BDB.js";
import {
  DietUpdateWithoutItemsInputSchema
} from "./chunk-7VL3SCPV.js";
import {
  DietCreateWithoutItemsInputSchema
} from "./chunk-IK3W7FQY.js";
import {
  DietUncheckedCreateWithoutItemsInputSchema
} from "./chunk-IPNOD4Y4.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";

// src/database/inputTypeSchemas/DietUpsertWithWhereUniqueWithoutItemsInputSchema.ts
import { z } from "zod";
var DietUpsertWithWhereUniqueWithoutItemsInputSchema = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  update: z.union([z.lazy(() => DietUpdateWithoutItemsInputSchema), z.lazy(() => DietUncheckedUpdateWithoutItemsInputSchema)]),
  create: z.union([z.lazy(() => DietCreateWithoutItemsInputSchema), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema)])
}).strict();
var DietUpsertWithWhereUniqueWithoutItemsInputSchema_default = DietUpsertWithWhereUniqueWithoutItemsInputSchema;

export {
  DietUpsertWithWhereUniqueWithoutItemsInputSchema,
  DietUpsertWithWhereUniqueWithoutItemsInputSchema_default
};
//# sourceMappingURL=chunk-YGVKP4XZ.js.map