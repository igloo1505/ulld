import {
  EquationUncheckedUpdateWithoutRelatedValuesInputSchema
} from "./chunk-O7XAKYUW.js";
import {
  EquationUpdateWithoutRelatedValuesInputSchema
} from "./chunk-J2QN2SFM.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-5LG4UXJA.js";

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
//# sourceMappingURL=chunk-EVBT4NKY.js.map