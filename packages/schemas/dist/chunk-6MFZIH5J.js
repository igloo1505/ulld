import {
  WaitlistRequestCreateManyInputSchema
} from "./chunk-RZLACC2A.js";

// src/database/outputTypeSchemas/WaitlistRequestCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var WaitlistRequestCreateManyAndReturnArgsSchema = z.object({
  data: z.union([WaitlistRequestCreateManyInputSchema, WaitlistRequestCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var WaitlistRequestCreateManyAndReturnArgsSchema_default = WaitlistRequestCreateManyAndReturnArgsSchema;

export {
  WaitlistRequestCreateManyAndReturnArgsSchema,
  WaitlistRequestCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-6MFZIH5J.js.map