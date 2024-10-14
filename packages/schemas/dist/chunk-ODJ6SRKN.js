import {
  RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema
} from "./chunk-OKREY6QZ.js";
import {
  RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema
} from "./chunk-NOKFIDRF.js";
import {
  RelatedValuesScalarWhereInputSchema
} from "./chunk-DCZDMMXO.js";
import {
  RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema
} from "./chunk-73FA4X7M.js";
import {
  RelatedValuesCreateOrConnectWithoutEquationsInputSchema
} from "./chunk-QCWFXFM5.js";
import {
  RelatedValuesCreateWithoutEquationsInputSchema
} from "./chunk-23VC2G3X.js";
import {
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema
} from "./chunk-NC3DMGJJ.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-U7B5SDOA.js";

// src/database/inputTypeSchemas/RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema.ts
import { z } from "zod";
var RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema = z.object({
  create: z.union([z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema).array(), z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema), z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => RelatedValuesWhereUniqueInputSchema), z.lazy(() => RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RelatedValuesWhereUniqueInputSchema), z.lazy(() => RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RelatedValuesWhereUniqueInputSchema), z.lazy(() => RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RelatedValuesWhereUniqueInputSchema), z.lazy(() => RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RelatedValuesScalarWhereInputSchema), z.lazy(() => RelatedValuesScalarWhereInputSchema).array()]).optional()
}).strict();
var RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema_default = RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema;

export {
  RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema,
  RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema_default
};
//# sourceMappingURL=chunk-ODJ6SRKN.js.map