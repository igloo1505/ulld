import {
  CitationsGroupCreateManyInputSchema
} from "./chunk-LFFSHALU.js";

// src/database/outputTypeSchemas/CitationsGroupCreateManyArgsSchema.ts
import { z } from "zod";
var CitationsGroupCreateManyArgsSchema = z.object({
  data: z.union([CitationsGroupCreateManyInputSchema, CitationsGroupCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var CitationsGroupCreateManyArgsSchema_default = CitationsGroupCreateManyArgsSchema;

export {
  CitationsGroupCreateManyArgsSchema,
  CitationsGroupCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-DPXJTHMM.js.map