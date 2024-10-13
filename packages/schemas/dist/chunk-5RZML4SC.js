import {
  EquationUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-6HZ5LMIN.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-KJCPJMDE.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-A6JZCD5I.js";

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
//# sourceMappingURL=chunk-5RZML4SC.js.map