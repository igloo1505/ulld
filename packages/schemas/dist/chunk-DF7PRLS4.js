import {
  TimePeriodCreateInputSchema
} from "./chunk-OO2THCBC.js";
import {
  TimePeriodUncheckedCreateInputSchema
} from "./chunk-YGRWJEK4.js";
import {
  TimePeriodUncheckedUpdateInputSchema
} from "./chunk-XBQMIWWE.js";
import {
  TimePeriodUpdateInputSchema
} from "./chunk-RXYAJWH7.js";
import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";

// src/database/outputTypeSchemas/TimePeriodUpsertArgsSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodUpsertArgsSchema = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: TimePeriodWhereUniqueInputSchema,
  create: z.union([TimePeriodCreateInputSchema, TimePeriodUncheckedCreateInputSchema]),
  update: z.union([TimePeriodUpdateInputSchema, TimePeriodUncheckedUpdateInputSchema])
}).strict();
var TimePeriodUpsertArgsSchema_default = TimePeriodUpsertArgsSchema;

export {
  TimePeriodSelectSchema,
  TimePeriodUpsertArgsSchema,
  TimePeriodUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-DF7PRLS4.js.map