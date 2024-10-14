import {
  TopicSelectSchema
} from "./chunk-KZUHTSWW.js";
import {
  TopicIncludeSchema
} from "./chunk-JV52BDQC.js";

// src/database/outputTypeSchemas/TopicArgsSchema.ts
import { z } from "zod";
var TopicArgsSchema = z.object({
  select: z.lazy(() => TopicSelectSchema).optional(),
  include: z.lazy(() => TopicIncludeSchema).optional()
}).strict();
var TopicArgsSchema_default = TopicArgsSchema;

export {
  TopicArgsSchema,
  TopicArgsSchema_default
};
//# sourceMappingURL=chunk-IVRZHV3L.js.map