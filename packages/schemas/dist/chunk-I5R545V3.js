import {
  TimePeriodCreateInputSchema
} from "./chunk-OO2THCBC.js";
import {
  TimePeriodUncheckedCreateInputSchema
} from "./chunk-YGRWJEK4.js";
import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-KDYZAD52.js";

// src/database/outputTypeSchemas/TimePeriodCreateArgsSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodCreateArgsSchema = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  data: z.union([TimePeriodCreateInputSchema, TimePeriodUncheckedCreateInputSchema]).optional()
}).strict();
var TimePeriodCreateArgsSchema_default = TimePeriodCreateArgsSchema;

export {
  TimePeriodSelectSchema,
  TimePeriodCreateArgsSchema,
  TimePeriodCreateArgsSchema_default
};
//# sourceMappingURL=chunk-I5R545V3.js.map