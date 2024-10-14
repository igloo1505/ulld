import {
  TagCreateManyInputSchema
} from "./chunk-KKCL5IYN.js";

// src/database/outputTypeSchemas/TagCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var TagCreateManyAndReturnArgsSchema = z.object({
  data: z.union([TagCreateManyInputSchema, TagCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var TagCreateManyAndReturnArgsSchema_default = TagCreateManyAndReturnArgsSchema;

export {
  TagCreateManyAndReturnArgsSchema,
  TagCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-5OPIINE6.js.map