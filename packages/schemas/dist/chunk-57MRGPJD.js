import {
  EquationCreateManyInputSchema
} from "./chunk-EO4T5KUC.js";

// src/database/outputTypeSchemas/EquationCreateManyArgsSchema.ts
import { z } from "zod";
var EquationCreateManyArgsSchema = z.object({
  data: z.union([EquationCreateManyInputSchema, EquationCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var EquationCreateManyArgsSchema_default = EquationCreateManyArgsSchema;

export {
  EquationCreateManyArgsSchema,
  EquationCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-57MRGPJD.js.map