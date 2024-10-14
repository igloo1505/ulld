import {
  ServingCreateManyInputSchema
} from "./chunk-6NEWLXQS.js";

// src/database/outputTypeSchemas/ServingCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var ServingCreateManyAndReturnArgsSchema = z.object({
  data: z.union([ServingCreateManyInputSchema, ServingCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ServingCreateManyAndReturnArgsSchema_default = ServingCreateManyAndReturnArgsSchema;

export {
  ServingCreateManyAndReturnArgsSchema,
  ServingCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-QFTQEZHQ.js.map