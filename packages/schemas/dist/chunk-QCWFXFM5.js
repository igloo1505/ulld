import {
  RelatedValuesCreateWithoutEquationsInputSchema
} from "./chunk-23VC2G3X.js";
import {
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema
} from "./chunk-NC3DMGJJ.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-U7B5SDOA.js";

// src/database/inputTypeSchemas/RelatedValuesCreateOrConnectWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesCreateOrConnectWithoutEquationsInputSchema = z.object({
  where: z.lazy(() => RelatedValuesWhereUniqueInputSchema),
  create: z.union([z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesCreateOrConnectWithoutEquationsInputSchema_default = RelatedValuesCreateOrConnectWithoutEquationsInputSchema;

export {
  RelatedValuesCreateOrConnectWithoutEquationsInputSchema,
  RelatedValuesCreateOrConnectWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-QCWFXFM5.js.map