import {
  WaitlistRequestCreateManyInputSchema
} from "./chunk-RZLACC2A.js";

// src/database/outputTypeSchemas/WaitlistRequestCreateManyArgsSchema.ts
import { z } from "zod";
var WaitlistRequestCreateManyArgsSchema = z.object({
  data: z.union([WaitlistRequestCreateManyInputSchema, WaitlistRequestCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var WaitlistRequestCreateManyArgsSchema_default = WaitlistRequestCreateManyArgsSchema;

export {
  WaitlistRequestCreateManyArgsSchema,
  WaitlistRequestCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-AOS54DG5.js.map