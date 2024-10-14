import {
  ReadingListCreateManyInputSchema
} from "./chunk-DTV766SZ.js";

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
//# sourceMappingURL=chunk-UAJWB2NO.js.map