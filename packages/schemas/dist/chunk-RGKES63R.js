import {
  TagCreateManyInputSchema
} from "./chunk-ZXF2RNGB.js";

// src/database/outputTypeSchemas/TagCreateManyArgsSchema.ts
import { z } from "zod";
var TagCreateManyArgsSchema = z.object({
  data: z.union([TagCreateManyInputSchema, TagCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var TagCreateManyArgsSchema_default = TagCreateManyArgsSchema;

export {
  TagCreateManyArgsSchema,
  TagCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-RGKES63R.js.map