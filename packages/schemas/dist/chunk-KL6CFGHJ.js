import {
  EquationUncheckedUpdateManyInputSchema
} from "./chunk-7G4VLLDM.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-A6JZCD5I.js";
import {
  EquationWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/EquationUpdateManyArgsSchema.ts
import { z } from "zod";
var EquationUpdateManyArgsSchema = z.object({
  data: z.union([EquationUpdateManyMutationInputSchema, EquationUncheckedUpdateManyInputSchema]),
  where: EquationWhereInputSchema.optional()
}).strict();
var EquationUpdateManyArgsSchema_default = EquationUpdateManyArgsSchema;

export {
  EquationUpdateManyArgsSchema,
  EquationUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-KL6CFGHJ.js.map