import {
  TopicCreateManyInputSchema
} from "./chunk-S2T7TSKN.js";

// src/database/outputTypeSchemas/TopicCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var TopicCreateManyAndReturnArgsSchema = z.object({
  data: z.union([TopicCreateManyInputSchema, TopicCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var TopicCreateManyAndReturnArgsSchema_default = TopicCreateManyAndReturnArgsSchema;

export {
  TopicCreateManyAndReturnArgsSchema,
  TopicCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-7HAXVCLN.js.map