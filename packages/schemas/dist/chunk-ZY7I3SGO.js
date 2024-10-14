import {
  QAPairSelectSchema
} from "./chunk-Z5G3STQ4.js";
import {
  QAPairIncludeSchema
} from "./chunk-JV52BDQC.js";

// src/database/outputTypeSchemas/QAPairArgsSchema.ts
import { z } from "zod";
var QAPairArgsSchema = z.object({
  select: z.lazy(() => QAPairSelectSchema).optional(),
  include: z.lazy(() => QAPairIncludeSchema).optional()
}).strict();
var QAPairArgsSchema_default = QAPairArgsSchema;

export {
  QAPairArgsSchema,
  QAPairArgsSchema_default
};
//# sourceMappingURL=chunk-ZY7I3SGO.js.map