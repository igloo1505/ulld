import {
  TopicUncheckedUpdateManyInputSchema
} from "./chunk-EXH5QN4N.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";
import {
  TopicWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/TopicUpdateManyArgsSchema.ts
import { z } from "zod";
var TopicUpdateManyArgsSchema = z.object({
  data: z.union([TopicUpdateManyMutationInputSchema, TopicUncheckedUpdateManyInputSchema]),
  where: TopicWhereInputSchema.optional()
}).strict();
var TopicUpdateManyArgsSchema_default = TopicUpdateManyArgsSchema;

export {
  TopicUpdateManyArgsSchema,
  TopicUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-DBNNMXJ7.js.map