// src/database/inputTypeSchemas/EquationUpdatevariablesInputSchema.ts
import { z } from "zod";
var EquationUpdatevariablesInputSchema = z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
var EquationUpdatevariablesInputSchema_default = EquationUpdatevariablesInputSchema;

export {
  EquationUpdatevariablesInputSchema,
  EquationUpdatevariablesInputSchema_default
};
//# sourceMappingURL=chunk-D7D7MTKD.js.map