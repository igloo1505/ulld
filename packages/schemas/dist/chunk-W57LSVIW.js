import {
  EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema
} from "./chunk-FZKEZI6S.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-34ND25JL.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-XCBYVXYO.js";

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema.ts
import { z } from "zod";
var EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([z.lazy(() => EquationUpdateManyMutationInputSchema), z.lazy(() => EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema_default = EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema;

export {
  EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema,
  EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema_default
};
//# sourceMappingURL=chunk-W57LSVIW.js.map