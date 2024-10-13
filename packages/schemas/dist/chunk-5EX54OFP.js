import {
  ReadingListCreateManyInputSchema
} from "./chunk-PHSTJOWE.js";

// src/database/outputTypeSchemas/ReadingListCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var ReadingListCreateManyAndReturnArgsSchema = z.object({
  data: z.union([ReadingListCreateManyInputSchema, ReadingListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ReadingListCreateManyAndReturnArgsSchema_default = ReadingListCreateManyAndReturnArgsSchema;

export {
  ReadingListCreateManyAndReturnArgsSchema,
  ReadingListCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-5EX54OFP.js.map