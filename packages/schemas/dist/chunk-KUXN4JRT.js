import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-BZDWBW7V.js";

// src/database/outputTypeSchemas/DailyFocusFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusFindUniqueOrThrowArgsSchema = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusFindUniqueOrThrowArgsSchema_default = DailyFocusFindUniqueOrThrowArgsSchema;

export {
  DailyFocusSelectSchema,
  DailyFocusFindUniqueOrThrowArgsSchema,
  DailyFocusFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-KUXN4JRT.js.map