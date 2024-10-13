import {
  TagSelectSchema
} from "./chunk-L3UWKWL3.js";
import {
  TagIncludeSchema
} from "./chunk-YNCDDFUC.js";

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
//# sourceMappingURL=chunk-ZZUXNOEQ.js.map