import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-OFZ4JWLS.js";

// src/database/outputTypeSchemas/DailyFocusFindUniqueArgsSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusFindUniqueArgsSchema = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusFindUniqueArgsSchema_default = DailyFocusFindUniqueArgsSchema;

export {
  DailyFocusSelectSchema,
  DailyFocusFindUniqueArgsSchema,
  DailyFocusFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-75VD7Q7V.js.map