import {
  DietaryItemCreateManyInputSchema
} from "./chunk-6GLNGD4W.js";

// src/database/outputTypeSchemas/DietaryItemCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var DietaryItemCreateManyAndReturnArgsSchema = z.object({
  data: z.union([DietaryItemCreateManyInputSchema, DietaryItemCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DietaryItemCreateManyAndReturnArgsSchema_default = DietaryItemCreateManyAndReturnArgsSchema;

export {
  DietaryItemCreateManyAndReturnArgsSchema,
  DietaryItemCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-3QZRNQQM.js.map