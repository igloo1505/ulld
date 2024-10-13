import {
  RelatedValuesCreateWithoutEquationsInputSchema
} from "./chunk-JJ4ICZFB.js";
import {
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema
} from "./chunk-4VH2GHEO.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-SSNELDXU.js";

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
//# sourceMappingURL=chunk-VUNCGXZT.js.map