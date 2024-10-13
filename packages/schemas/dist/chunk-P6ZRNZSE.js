import {
  WaitlistRequestCreateManyInputSchema
} from "./chunk-V5ZCEMOP.js";

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
//# sourceMappingURL=chunk-P6ZRNZSE.js.map