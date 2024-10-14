import {
  DailyFocusCreateManyInputSchema
} from "./chunk-HHOFUF36.js";

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
//# sourceMappingURL=chunk-JZGZFHNI.js.map