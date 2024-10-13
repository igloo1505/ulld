import {
  DJTCreateManyInputSchema
} from "./chunk-7HYR47VV.js";

// src/database/outputTypeSchemas/DJTCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var DJTCreateManyAndReturnArgsSchema = z.object({
  data: z.union([DJTCreateManyInputSchema, DJTCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DJTCreateManyAndReturnArgsSchema_default = DJTCreateManyAndReturnArgsSchema;

export {
  DJTCreateManyAndReturnArgsSchema,
  DJTCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-X4GLHEXM.js.map