import {
  EquationUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-6AGWCQZ4.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-34ND25JL.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-XCBYVXYO.js";

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var EquationUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([z.lazy(() => EquationUpdateManyMutationInputSchema), z.lazy(() => EquationUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutTopicsInputSchema_default = EquationUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  EquationUpdateManyWithWhereWithoutTopicsInputSchema,
  EquationUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-CHLDXCIE.js.map