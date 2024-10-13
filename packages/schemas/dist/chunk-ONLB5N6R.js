import {
  PracticeExamSelectSchema
} from "./chunk-SQCCZ7GE.js";
import {
  PracticeExamIncludeSchema
} from "./chunk-YNCDDFUC.js";

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
//# sourceMappingURL=chunk-ONLB5N6R.js.map