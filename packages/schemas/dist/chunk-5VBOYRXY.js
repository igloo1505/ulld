import {
  DailyFocusCreateInputSchema
} from "./chunk-XEGH4DBV.js";
import {
  DailyFocusUncheckedCreateInputSchema
} from "./chunk-APECMFWK.js";

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
//# sourceMappingURL=chunk-5VBOYRXY.js.map