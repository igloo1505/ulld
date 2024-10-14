import {
  PracticeExamCountOutputTypeSelectSchema
} from "./chunk-FR2KMCZK.js";

// src/database/outputTypeSchemas/PracticeExamCountOutputTypeArgsSchema.ts
import { z } from "zod";
var PracticeExamCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => PracticeExamCountOutputTypeSelectSchema).nullish()
}).strict();
var PracticeExamCountOutputTypeArgsSchema_default = PracticeExamCountOutputTypeSelectSchema;

export {
  PracticeExamCountOutputTypeArgsSchema,
  PracticeExamCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-GRQLS3JL.js.map