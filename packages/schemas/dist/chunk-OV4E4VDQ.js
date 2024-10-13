import {
  TopicCreateManyInputSchema
} from "./chunk-IVXMQQEN.js";

// src/database/outputTypeSchemas/TopicCreateManyArgsSchema.ts
import { z } from "zod";
var TopicCreateManyArgsSchema = z.object({
  data: z.union([TopicCreateManyInputSchema, TopicCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var TopicCreateManyArgsSchema_default = TopicCreateManyArgsSchema;

export {
  TopicCreateManyArgsSchema,
  TopicCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-OV4E4VDQ.js.map