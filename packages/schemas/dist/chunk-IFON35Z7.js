// src/database/inputTypeSchemas/EquationUpdatekeywordsInputSchema.ts
import { z } from "zod";
var EquationUpdatekeywordsInputSchema = z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
var EquationUpdatekeywordsInputSchema_default = EquationUpdatekeywordsInputSchema;

export {
  EquationUpdatekeywordsInputSchema,
  EquationUpdatekeywordsInputSchema_default
};
//# sourceMappingURL=chunk-IFON35Z7.js.map