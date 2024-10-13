import {
  DailyFocusCreateManyInputSchema
} from "./chunk-P7226WBK.js";

// src/database/outputTypeSchemas/DailyFocusCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var DailyFocusCreateManyAndReturnArgsSchema = z.object({
  data: z.union([DailyFocusCreateManyInputSchema, DailyFocusCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DailyFocusCreateManyAndReturnArgsSchema_default = DailyFocusCreateManyAndReturnArgsSchema;

export {
  DailyFocusCreateManyAndReturnArgsSchema,
  DailyFocusCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-W2V2RTGV.js.map