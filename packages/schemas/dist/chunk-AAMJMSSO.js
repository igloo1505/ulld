import {
  DietaryItemUpdateManyWithWhereWithoutDietInputSchema
} from "./chunk-LY6KMKOU.js";
import {
  DietaryItemScalarWhereInputSchema
} from "./chunk-Z3DHIJO5.js";
import {
  DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema
} from "./chunk-KSLYHMM5.js";
import {
  DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema
} from "./chunk-UGBPRQXV.js";
import {
  DietaryItemCreateOrConnectWithoutDietInputSchema
} from "./chunk-K3IBRI57.js";
import {
  DietaryItemCreateWithoutDietInputSchema
} from "./chunk-75MQZDZM.js";
import {
  DietaryItemUncheckedCreateWithoutDietInputSchema
} from "./chunk-2W7FEZ6Q.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";

// src/database/inputTypeSchemas/DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema.ts
import { z } from "zod";
var DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema = z.object({
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
var DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema_default = DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema;

export {
  DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema,
  DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema_default
};
//# sourceMappingURL=chunk-AAMJMSSO.js.map