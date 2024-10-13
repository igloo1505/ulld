import {
  EquationSelectSchema
} from "./chunk-RLP4FFVV.js";
import {
  EquationIncludeSchema
} from "./chunk-YNCDDFUC.js";

// src/database/outputTypeSchemas/EquationArgsSchema.ts
import { z } from "zod";
var EquationArgsSchema = z.object({
  select: z.lazy(() => EquationSelectSchema).optional(),
  include: z.lazy(() => EquationIncludeSchema).optional()
}).strict();
var EquationArgsSchema_default = EquationArgsSchema;

export {
  EquationArgsSchema,
  EquationArgsSchema_default
};
//# sourceMappingURL=chunk-E6EKP3ZT.js.map