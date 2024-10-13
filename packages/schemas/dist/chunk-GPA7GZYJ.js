import {
  DailyFocusCreateInputSchema
} from "./chunk-F7B42AGP.js";
import {
  DailyFocusUncheckedCreateInputSchema
} from "./chunk-INSIQ2KX.js";

// src/database/outputTypeSchemas/DailyFocusCreateArgsSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusCreateArgsSchema = z.object({
  select: DailyFocusSelectSchema.optional(),
  data: z.union([DailyFocusCreateInputSchema, DailyFocusUncheckedCreateInputSchema])
}).strict();
var DailyFocusCreateArgsSchema_default = DailyFocusCreateArgsSchema;

export {
  DailyFocusSelectSchema,
  DailyFocusCreateArgsSchema,
  DailyFocusCreateArgsSchema_default
};
//# sourceMappingURL=chunk-GPA7GZYJ.js.map