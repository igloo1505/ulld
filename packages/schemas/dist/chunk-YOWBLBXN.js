import {
  TopicUncheckedUpdateManyInputSchema
} from "./chunk-VYAQWRAN.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";
import {
  TopicWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-YOWBLBXN.js.map