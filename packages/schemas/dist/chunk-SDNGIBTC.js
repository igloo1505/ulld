import {
  TopicCountOutputTypeSelectSchema
} from "./chunk-CZ2G2Y3F.js";

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
//# sourceMappingURL=chunk-SDNGIBTC.js.map