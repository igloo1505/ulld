import {
  DietUpdateManyWithWhereWithoutItemsInputSchema
} from "./chunk-L2ALUH3B.js";
import {
  DietScalarWhereInputSchema
} from "./chunk-2TX4C7P4.js";
import {
  DietUpdateWithWhereUniqueWithoutItemsInputSchema
} from "./chunk-GDXUFOMC.js";
import {
  DietUpsertWithWhereUniqueWithoutItemsInputSchema
} from "./chunk-YGVKP4XZ.js";
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

// src/database/inputTypeSchemas/DietUpdateManyWithoutItemsNestedInputSchema.ts
import { z } from "zod";
var DietUpdateManyWithoutItemsNestedInputSchema = z.object({
  create: z.union([z.lazy(() => DietCreateWithoutItemsInputSchema), z.lazy(() => DietCreateWithoutItemsInputSchema).array(), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema), z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DietUpsertWithWhereUniqueWithoutItemsInputSchema), z.lazy(() => DietUpsertWithWhereUniqueWithoutItemsInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => DietWhereUniqueInputSchema), z.lazy(() => DietWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DietWhereUniqueInputSchema), z.lazy(() => DietWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DietWhereUniqueInputSchema), z.lazy(() => DietWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DietWhereUniqueInputSchema), z.lazy(() => DietWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => DietUpdateWithWhereUniqueWithoutItemsInputSchema), z.lazy(() => DietUpdateWithWhereUniqueWithoutItemsInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DietUpdateManyWithWhereWithoutItemsInputSchema), z.lazy(() => DietUpdateManyWithWhereWithoutItemsInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DietScalarWhereInputSchema), z.lazy(() => DietScalarWhereInputSchema).array()]).optional()
}).strict();
var DietUpdateManyWithoutItemsNestedInputSchema_default = DietUpdateManyWithoutItemsNestedInputSchema;

export {
  DietUpdateManyWithoutItemsNestedInputSchema,
  DietUpdateManyWithoutItemsNestedInputSchema_default
};
//# sourceMappingURL=chunk-MEILWKON.js.map