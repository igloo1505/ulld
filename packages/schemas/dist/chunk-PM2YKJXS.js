import {
  PracticeExamCreateManyInputSchema
} from "./chunk-22RCHFUT.js";

// src/database/outputTypeSchemas/PracticeExamCreateManyArgsSchema.ts
import { z } from "zod";
var PracticeExamCreateManyArgsSchema = z.object({
  data: z.union([PracticeExamCreateManyInputSchema, PracticeExamCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var PracticeExamCreateManyArgsSchema_default = PracticeExamCreateManyArgsSchema;

export {
  PracticeExamCreateManyArgsSchema,
  PracticeExamCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-PM2YKJXS.js.map