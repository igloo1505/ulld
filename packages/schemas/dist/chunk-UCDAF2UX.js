import {
  EquationUncheckedUpdateManyInputSchema
} from "./chunk-ZS5I3T5M.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-XCBYVXYO.js";
import {
  EquationWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-UCDAF2UX.js.map