import {
  QAPairSelectSchema
} from "./chunk-NJ4W762I.js";
import {
  QAPairIncludeSchema
} from "./chunk-YNCDDFUC.js";

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
//# sourceMappingURL=chunk-V6OD5T3A.js.map