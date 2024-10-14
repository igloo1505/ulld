import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-OFZ4JWLS.js";

// src/database/outputTypeSchemas/DailyFocusDeleteArgsSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusDeleteArgsSchema = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusDeleteArgsSchema_default = DailyFocusDeleteArgsSchema;

export {
  DailyFocusSelectSchema,
  DailyFocusDeleteArgsSchema,
  DailyFocusDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-LVWSKHYZ.js.map