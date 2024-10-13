import {
  EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema
} from "./chunk-EJTDZRXC.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-KJCPJMDE.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-A6JZCD5I.js";

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
//# sourceMappingURL=chunk-XPYL6IZZ.js.map