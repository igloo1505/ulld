import {
  RelatedValuesScalarWhereInputSchema
} from "./chunk-ZISK2BKF.js";
import {
  RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-NS4XPLVX.js";
import {
  RelatedValuesUpdateManyMutationInputSchema
} from "./chunk-OJECK4MZ.js";

// src/database/inputTypeSchemas/RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema.ts
import { z } from "zod";
var RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema = z.object({
  where: z.lazy(() => RelatedValuesScalarWhereInputSchema),
  data: z.union([z.lazy(() => RelatedValuesUpdateManyMutationInputSchema), z.lazy(() => RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema_default = RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema;

export {
  RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema,
  RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-UG7XFSUT.js.map