import {
  EquationSelectSchema
} from "./chunk-5AZPBWD4.js";
import {
  EquationIncludeSchema
} from "./chunk-JV52BDQC.js";

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
//# sourceMappingURL=chunk-XHBM77FN.js.map