import {
  DailyFocusUpdateInputSchema
} from "./chunk-AZXGKIVS.js";
import {
  DailyFocusUncheckedUpdateInputSchema
} from "./chunk-MC4CJQSB.js";
import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-OFZ4JWLS.js";

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
//# sourceMappingURL=chunk-VQCA4OIY.js.map