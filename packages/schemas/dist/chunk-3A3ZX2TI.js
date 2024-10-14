import {
  EquationUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-ZCSF5UIN.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-34ND25JL.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-XCBYVXYO.js";

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutSubjectsInputSchema.ts
import { z } from "zod";
var EquationUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([z.lazy(() => EquationUpdateManyMutationInputSchema), z.lazy(() => EquationUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutSubjectsInputSchema_default = EquationUpdateManyWithWhereWithoutSubjectsInputSchema;

export {
  EquationUpdateManyWithWhereWithoutSubjectsInputSchema,
  EquationUpdateManyWithWhereWithoutSubjectsInputSchema_default
};
//# sourceMappingURL=chunk-3A3ZX2TI.js.map