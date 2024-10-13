import {
  ReadingListCreateManyInputSchema
} from "./chunk-PHSTJOWE.js";

// src/database/outputTypeSchemas/ReadingListCreateManyArgsSchema.ts
import { z } from "zod";
var ReadingListCreateManyArgsSchema = z.object({
  data: z.union([ReadingListCreateManyInputSchema, ReadingListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ReadingListCreateManyArgsSchema_default = ReadingListCreateManyArgsSchema;

export {
  ReadingListCreateManyArgsSchema,
  ReadingListCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-XEFYI2UM.js.map