import {
  SubjectSelectSchema
} from "./chunk-VY2KRXHN.js";
import {
  SubjectIncludeSchema
} from "./chunk-YNCDDFUC.js";

// src/database/outputTypeSchemas/SubjectArgsSchema.ts
import { z } from "zod";
var SubjectArgsSchema = z.object({
  select: z.lazy(() => SubjectSelectSchema).optional(),
  include: z.lazy(() => SubjectIncludeSchema).optional()
}).strict();
var SubjectArgsSchema_default = SubjectArgsSchema;

export {
  SubjectArgsSchema,
  SubjectArgsSchema_default
};
//# sourceMappingURL=chunk-JKUP7CC7.js.map