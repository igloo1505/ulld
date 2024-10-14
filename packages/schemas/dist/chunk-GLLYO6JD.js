import {
  PracticeExamCreateManyInputSchema
} from "./chunk-22RCHFUT.js";

// src/database/outputTypeSchemas/PracticeExamCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var PracticeExamCreateManyAndReturnArgsSchema = z.object({
  data: z.union([PracticeExamCreateManyInputSchema, PracticeExamCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var PracticeExamCreateManyAndReturnArgsSchema_default = PracticeExamCreateManyAndReturnArgsSchema;

export {
  PracticeExamCreateManyAndReturnArgsSchema,
  PracticeExamCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-GLLYO6JD.js.map