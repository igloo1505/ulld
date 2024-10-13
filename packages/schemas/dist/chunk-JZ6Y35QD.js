import {
  EquationCreateManyInputSchema
} from "./chunk-LD6VV3EZ.js";

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
//# sourceMappingURL=chunk-JZ6Y35QD.js.map