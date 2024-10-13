import {
  TopicSelectSchema
} from "./chunk-JKKBC3CH.js";
import {
  TopicIncludeSchema
} from "./chunk-YNCDDFUC.js";

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
//# sourceMappingURL=chunk-YQNNAT64.js.map