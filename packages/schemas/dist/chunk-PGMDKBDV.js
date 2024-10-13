import {
  DietCreateManyInputSchema
} from "./chunk-5FTTXKXX.js";

// src/database/outputTypeSchemas/DietCreateManyArgsSchema.ts
import { z } from "zod";
var DietCreateManyArgsSchema = z.object({
  data: z.union([DietCreateManyInputSchema, DietCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DietCreateManyArgsSchema_default = DietCreateManyArgsSchema;

export {
  DietCreateManyArgsSchema,
  DietCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-PGMDKBDV.js.map