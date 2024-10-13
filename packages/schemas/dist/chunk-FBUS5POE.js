import {
  WaitlistRequestCreateManyInputSchema
} from "./chunk-V5ZCEMOP.js";

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
//# sourceMappingURL=chunk-FBUS5POE.js.map