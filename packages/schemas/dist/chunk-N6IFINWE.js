import {
  DJTCreateManyInputSchema
} from "./chunk-VBDH3DP4.js";

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
//# sourceMappingURL=chunk-N6IFINWE.js.map