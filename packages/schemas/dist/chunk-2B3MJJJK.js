import {
  DietUpdateManyWithWhereWithoutItemsInputSchema
} from "./chunk-4GH3N7FD.js";
import {
  DietScalarWhereInputSchema
} from "./chunk-FAEQNT2D.js";
import {
  DietUpdateWithWhereUniqueWithoutItemsInputSchema
} from "./chunk-OBLRQTSF.js";
import {
  DietUpsertWithWhereUniqueWithoutItemsInputSchema
} from "./chunk-QKUM3S7C.js";
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
//# sourceMappingURL=chunk-2B3MJJJK.js.map