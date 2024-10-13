import {
  EquationUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-N3RFVUC4.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-KJCPJMDE.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-A6JZCD5I.js";

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
//# sourceMappingURL=chunk-Q6ZASWAL.js.map