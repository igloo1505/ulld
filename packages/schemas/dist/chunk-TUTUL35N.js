import {
  DietCreateManyInputSchema
} from "./chunk-EIDDVPJJ.js";

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
//# sourceMappingURL=chunk-TUTUL35N.js.map