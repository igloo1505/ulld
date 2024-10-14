import {
  TagSelectSchema
} from "./chunk-WHBC4QK4.js";
import {
  TagIncludeSchema
} from "./chunk-JV52BDQC.js";

// src/database/outputTypeSchemas/TagArgsSchema.ts
import { z } from "zod";
var TagArgsSchema = z.object({
  select: z.lazy(() => TagSelectSchema).optional(),
  include: z.lazy(() => TagIncludeSchema).optional()
}).strict();
var TagArgsSchema_default = TagArgsSchema;

export {
  TagArgsSchema,
  TagArgsSchema_default
};
//# sourceMappingURL=chunk-A7KCPXMB.js.map