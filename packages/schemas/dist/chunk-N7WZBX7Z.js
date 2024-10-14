import {
  ServingCreateManyInputSchema
} from "./chunk-6NEWLXQS.js";

// src/database/outputTypeSchemas/ServingCreateManyArgsSchema.ts
import { z } from "zod";
var ServingCreateManyArgsSchema = z.object({
  data: z.union([ServingCreateManyInputSchema, ServingCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ServingCreateManyArgsSchema_default = ServingCreateManyArgsSchema;

export {
  ServingCreateManyArgsSchema,
  ServingCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-N7WZBX7Z.js.map