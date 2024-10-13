import {
  DailyFocusCreateInputSchema
} from "./chunk-F7B42AGP.js";
import {
  DailyFocusUncheckedCreateInputSchema
} from "./chunk-INSIQ2KX.js";
import {
  DailyFocusUpdateInputSchema
} from "./chunk-XGFTP4FA.js";
import {
  DailyFocusUncheckedUpdateInputSchema
} from "./chunk-ZOD2O7VJ.js";
import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-BZDWBW7V.js";

// src/database/outputTypeSchemas/DailyFocusUpsertArgsSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusUpsertArgsSchema = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereUniqueInputSchema,
  create: z.union([DailyFocusCreateInputSchema, DailyFocusUncheckedCreateInputSchema]),
  update: z.union([DailyFocusUpdateInputSchema, DailyFocusUncheckedUpdateInputSchema])
}).strict();
var DailyFocusUpsertArgsSchema_default = DailyFocusUpsertArgsSchema;

export {
  DailyFocusSelectSchema,
  DailyFocusUpsertArgsSchema,
  DailyFocusUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-Y53SD7TB.js.map