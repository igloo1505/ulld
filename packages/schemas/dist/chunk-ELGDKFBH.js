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
//# sourceMappingURL=chunk-ELGDKFBH.js.map