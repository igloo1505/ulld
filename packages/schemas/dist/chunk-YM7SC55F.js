import {
  RelatedValuesUpdateWithoutEquationsInputSchema
} from "./chunk-6SUNMNPE.js";
import {
  RelatedValuesUncheckedUpdateWithoutEquationsInputSchema
} from "./chunk-47QXP3KM.js";
import {
  RelatedValuesWhereUniqueInputSchema
} from "./chunk-SSNELDXU.js";

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
//# sourceMappingURL=chunk-YM7SC55F.js.map