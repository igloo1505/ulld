import {
  RelatedValuesUpdateWithoutEquationsInputSchema
} from "./chunk-7RYXNK3Y.js";
import {
  RelatedValuesUncheckedUpdateWithoutEquationsInputSchema
} from "./chunk-64OVNVSN.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-U7B5SDOA.js";

// src/database/inputTypeSchemas/RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema = z.object({
  where: z.lazy(() => RelatedValuesWhereUniqueInputSchema),
  data: z.union([z.lazy(() => RelatedValuesUpdateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUncheckedUpdateWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema;

export {
  RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema,
  RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-OKREY6QZ.js.map