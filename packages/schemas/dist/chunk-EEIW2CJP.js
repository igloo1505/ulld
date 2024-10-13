import {
  PracticeExamCountOutputTypeSelectSchema
} from "./chunk-V6ZPAXAT.js";

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
//# sourceMappingURL=chunk-EEIW2CJP.js.map