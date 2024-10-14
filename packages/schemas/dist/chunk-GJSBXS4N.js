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

// src/database/inputTypeSchemas/RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema = z.object({
  create: z.union([z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema).array(), z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema), z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RelatedValuesWhereUniqueInputSchema), z.lazy(() => RelatedValuesWhereUniqueInputSchema).array()]).optional()
}).strict();
var RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema_default = RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema;

export {
  RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema,
  RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-GJSBXS4N.js.map