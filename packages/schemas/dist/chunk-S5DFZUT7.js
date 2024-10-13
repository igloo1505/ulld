import {
  DJTCreateManyInputSchema
} from "./chunk-7HYR47VV.js";

// src/database/outputTypeSchemas/DJTCreateManyArgsSchema.ts
import { z } from "zod";
var DJTCreateManyArgsSchema = z.object({
  data: z.union([DJTCreateManyInputSchema, DJTCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DJTCreateManyArgsSchema_default = DJTCreateManyArgsSchema;

export {
  DJTCreateManyArgsSchema,
  DJTCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-S5DFZUT7.js.map