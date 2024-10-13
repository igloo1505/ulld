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

// src/database/inputTypeSchemas/RelatedValuesCreateNestedManyWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesCreateNestedManyWithoutEquationsInputSchema = z.object({
  create: z.union([z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema).array(), z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema), z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RelatedValuesWhereUniqueInputSchema), z.lazy(() => RelatedValuesWhereUniqueInputSchema).array()]).optional()
}).strict();
var RelatedValuesCreateNestedManyWithoutEquationsInputSchema_default = RelatedValuesCreateNestedManyWithoutEquationsInputSchema;

export {
  RelatedValuesCreateNestedManyWithoutEquationsInputSchema,
  RelatedValuesCreateNestedManyWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-GAAP7B3B.js.map