import {
  DietCreateManyInputSchema
} from "./chunk-5FTTXKXX.js";

// src/database/outputTypeSchemas/DietCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var DietCreateManyAndReturnArgsSchema = z.object({
  data: z.union([DietCreateManyInputSchema, DietCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DietCreateManyAndReturnArgsSchema_default = DietCreateManyAndReturnArgsSchema;

export {
  DietCreateManyAndReturnArgsSchema,
  DietCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-6QUPISO5.js.map