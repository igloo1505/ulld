import {
  EquationCreateManyInputSchema
} from "./chunk-EO4T5KUC.js";

// src/database/outputTypeSchemas/EquationCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var EquationCreateManyAndReturnArgsSchema = z.object({
  data: z.union([EquationCreateManyInputSchema, EquationCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var EquationCreateManyAndReturnArgsSchema_default = EquationCreateManyAndReturnArgsSchema;

export {
  EquationCreateManyAndReturnArgsSchema,
  EquationCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-PXZUGLYU.js.map