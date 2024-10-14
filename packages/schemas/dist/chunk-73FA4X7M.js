import {
  RelatedValuesUpdateWithoutEquationsInputSchema
} from "./chunk-7RYXNK3Y.js";
import {
  RelatedValuesUncheckedUpdateWithoutEquationsInputSchema
} from "./chunk-64OVNVSN.js";
import {
  RelatedValuesCreateWithoutEquationsInputSchema
} from "./chunk-23VC2G3X.js";
import {
  RelatedValuesUncheckedCreateWithoutEquationsInputSchema
} from "./chunk-NC3DMGJJ.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-U7B5SDOA.js";

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
//# sourceMappingURL=chunk-73FA4X7M.js.map