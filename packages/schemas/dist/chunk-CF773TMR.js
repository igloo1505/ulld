import {
  DailyFocusUpdateInputSchema
} from "./chunk-XGFTP4FA.js";
import {
  DailyFocusUncheckedUpdateInputSchema
} from "./chunk-ZOD2O7VJ.js";
import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-BZDWBW7V.js";

// src/database/outputTypeSchemas/DailyFocusUpdateArgsSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusUpdateArgsSchema = z.object({
  select: DailyFocusSelectSchema.optional(),
  data: z.union([DailyFocusUpdateInputSchema, DailyFocusUncheckedUpdateInputSchema]),
  where: DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusUpdateArgsSchema_default = DailyFocusUpdateArgsSchema;

export {
  DailyFocusSelectSchema,
  DailyFocusUpdateArgsSchema,
  DailyFocusUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-CF773TMR.js.map