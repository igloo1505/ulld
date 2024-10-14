import {
  EquationUncheckedUpdateWithoutRelatedValuesInputSchema
} from "./chunk-DTAVN2HK.js";
import {
  EquationUpdateWithoutRelatedValuesInputSchema
} from "./chunk-RGMWAPTR.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-ZHPM3YVS.js";

// src/database/inputTypeSchemas/EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema.ts
import { z } from "zod";
var EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([z.lazy(() => EquationUpdateWithoutRelatedValuesInputSchema), z.lazy(() => EquationUncheckedUpdateWithoutRelatedValuesInputSchema)])
}).strict();
var EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema;

export {
  EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema,
  EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema_default
};
//# sourceMappingURL=chunk-NKXH7LPT.js.map