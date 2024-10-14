import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-OFZ4JWLS.js";

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
//# sourceMappingURL=chunk-HHASD7QQ.js.map