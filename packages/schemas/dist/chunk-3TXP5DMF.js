import {
  DietaryItemUpdateManyWithWhereWithoutDietInputSchema
} from "./chunk-W7HQFFNX.js";
import {
  DietaryItemScalarWhereInputSchema
} from "./chunk-7YIVPRKS.js";
import {
  DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema
} from "./chunk-ILQXM6PX.js";
import {
  DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema
} from "./chunk-25POSQDG.js";
import {
  DietaryItemCreateOrConnectWithoutDietInputSchema
} from "./chunk-I4KTL3CT.js";
import {
  DietaryItemCreateWithoutDietInputSchema
} from "./chunk-DOUQ3YIS.js";
import {
  DietaryItemUncheckedCreateWithoutDietInputSchema
} from "./chunk-FHWIZJB2.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";

// src/database/inputTypeSchemas/DietaryItemUpdateManyWithoutDietNestedInputSchema.ts
import { z } from "zod";
var DietaryItemUpdateManyWithoutDietNestedInputSchema = z.object({
  create: z.union([z.lazy(() => DietaryItemCreateWithoutDietInputSchema), z.lazy(() => DietaryItemCreateWithoutDietInputSchema).array(), z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema), z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema), z.lazy(() => DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => DietaryItemWhereUniqueInputSchema), z.lazy(() => DietaryItemWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DietaryItemWhereUniqueInputSchema), z.lazy(() => DietaryItemWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DietaryItemWhereUniqueInputSchema), z.lazy(() => DietaryItemWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DietaryItemWhereUniqueInputSchema), z.lazy(() => DietaryItemWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema), z.lazy(() => DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DietaryItemUpdateManyWithWhereWithoutDietInputSchema), z.lazy(() => DietaryItemUpdateManyWithWhereWithoutDietInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DietaryItemScalarWhereInputSchema), z.lazy(() => DietaryItemScalarWhereInputSchema).array()]).optional()
}).strict();
var DietaryItemUpdateManyWithoutDietNestedInputSchema_default = DietaryItemUpdateManyWithoutDietNestedInputSchema;

export {
  DietaryItemUpdateManyWithoutDietNestedInputSchema,
  DietaryItemUpdateManyWithoutDietNestedInputSchema_default
};
//# sourceMappingURL=chunk-3TXP5DMF.js.map