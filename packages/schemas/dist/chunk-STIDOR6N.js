import {
  TopicCountOutputTypeSelectSchema
} from "./chunk-WOJFU6VA.js";

// src/database/outputTypeSchemas/TopicCountOutputTypeArgsSchema.ts
import { z } from "zod";
var TopicCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => TopicCountOutputTypeSelectSchema).nullish()
}).strict();
var TopicCountOutputTypeArgsSchema_default = TopicCountOutputTypeSelectSchema;

export {
  TopicCountOutputTypeArgsSchema,
  TopicCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-STIDOR6N.js.map