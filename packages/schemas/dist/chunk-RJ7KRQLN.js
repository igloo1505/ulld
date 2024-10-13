import {
  EquationCreateManyInputSchema
} from "./chunk-LD6VV3EZ.js";

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
//# sourceMappingURL=chunk-RJ7KRQLN.js.map