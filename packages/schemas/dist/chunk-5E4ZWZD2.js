import {
  DailyFocusCreateManyInputSchema
} from "./chunk-P7226WBK.js";

// src/database/outputTypeSchemas/DailyFocusCreateManyArgsSchema.ts
import { z } from "zod";
var DailyFocusCreateManyArgsSchema = z.object({
  data: z.union([DailyFocusCreateManyInputSchema, DailyFocusCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DailyFocusCreateManyArgsSchema_default = DailyFocusCreateManyArgsSchema;

export {
  DailyFocusCreateManyArgsSchema,
  DailyFocusCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-5E4ZWZD2.js.map