import {
  CitationsGroupCreateManyInputSchema
} from "./chunk-NBBMIFQM.js";

// src/database/outputTypeSchemas/CitationsGroupCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var CitationsGroupCreateManyAndReturnArgsSchema = z.object({
  data: z.union([CitationsGroupCreateManyInputSchema, CitationsGroupCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var CitationsGroupCreateManyAndReturnArgsSchema_default = CitationsGroupCreateManyAndReturnArgsSchema;

export {
  CitationsGroupCreateManyAndReturnArgsSchema,
  CitationsGroupCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-Z7DOTQVB.js.map