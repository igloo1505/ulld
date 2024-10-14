import {
  PracticeExamSelectSchema
} from "./chunk-MK6PSU56.js";
import {
  PracticeExamIncludeSchema
} from "./chunk-JV52BDQC.js";

// src/database/outputTypeSchemas/PracticeExamArgsSchema.ts
import { z } from "zod";
var PracticeExamArgsSchema = z.object({
  select: z.lazy(() => PracticeExamSelectSchema).optional(),
  include: z.lazy(() => PracticeExamIncludeSchema).optional()
}).strict();
var PracticeExamArgsSchema_default = PracticeExamArgsSchema;

export {
  PracticeExamArgsSchema,
  PracticeExamArgsSchema_default
};
//# sourceMappingURL=chunk-IYEFKHQB.js.map