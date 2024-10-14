import {
  DietaryItemCreateManyInputSchema
} from "./chunk-6GLNGD4W.js";

// src/database/outputTypeSchemas/DietaryItemCreateManyArgsSchema.ts
import { z } from "zod";
var DietaryItemCreateManyArgsSchema = z.object({
  data: z.union([DietaryItemCreateManyInputSchema, DietaryItemCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DietaryItemCreateManyArgsSchema_default = DietaryItemCreateManyArgsSchema;

export {
  DietaryItemCreateManyArgsSchema,
  DietaryItemCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-W26Z6MEC.js.map