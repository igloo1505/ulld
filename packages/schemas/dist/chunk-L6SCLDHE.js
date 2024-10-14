import {
  SubjectSelectSchema
} from "./chunk-UD2V3RXQ.js";
import {
  SubjectIncludeSchema
} from "./chunk-JV52BDQC.js";

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
//# sourceMappingURL=chunk-L6SCLDHE.js.map