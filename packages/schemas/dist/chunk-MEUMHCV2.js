import {
  RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema
} from "./chunk-YM7SC55F.js";
import {
  RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema
} from "./chunk-UG7XFSUT.js";
import {
  RelatedValuesScalarWhereInputSchema
} from "./chunk-ZISK2BKF.js";
import {
  RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema
} from "./chunk-YBSFSQZY.js";
import {
  RelatedValuesCreateOrConnectWithoutEquationsInputSchema
} from "./chunk-VUNCGXZT.js";
import {
  RelatedValuesCreateWithoutEquationsInputSchema
} from "./chunk-JJ4ICZFB.js";
import {
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema
} from "./chunk-4VH2GHEO.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-SSNELDXU.js";

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
//# sourceMappingURL=chunk-MEUMHCV2.js.map