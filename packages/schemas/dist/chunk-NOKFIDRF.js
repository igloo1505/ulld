import {
  RelatedValuesScalarWhereInputSchema
} from "./chunk-DCZDMMXO.js";
import {
  RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-ONQTTGTB.js";
import {
  RelatedValuesUpdateManyMutationInputSchema
} from "./chunk-2ZV5K5FH.js";

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
//# sourceMappingURL=chunk-NOKFIDRF.js.map