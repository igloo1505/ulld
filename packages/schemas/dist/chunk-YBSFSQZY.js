import {
  RelatedValuesUpdateWithoutEquationsInputSchema
} from "./chunk-6SUNMNPE.js";
import {
  RelatedValuesUncheckedUpdateWithoutEquationsInputSchema
} from "./chunk-47QXP3KM.js";
import {
  RelatedValuesCreateWithoutEquationsInputSchema
} from "./chunk-JJ4ICZFB.js";
import {
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema
} from "./chunk-4VH2GHEO.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-SSNELDXU.js";

// src/database/inputTypeSchemas/RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema = z.object({
  where: z.lazy(() => RelatedValuesWhereUniqueInputSchema),
  update: z.union([z.lazy(() => RelatedValuesUpdateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUncheckedUpdateWithoutEquationsInputSchema)]),
  create: z.union([z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema;

export {
  RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema,
  RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-YBSFSQZY.js.map