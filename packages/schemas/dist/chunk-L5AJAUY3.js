import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  TimePeriodOrderByWithRelationInputSchema
} from "./chunk-J5RY4DJT.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";
import {
  TimePeriodScalarFieldEnumSchema
} from "./chunk-4V7L2DVJ.js";
import {
  TimePeriodWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/TimePeriodFindFirstArgsSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodFindFirstArgsSchema = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: TimePeriodWhereInputSchema.optional(),
  orderBy: z.union([TimePeriodOrderByWithRelationInputSchema.array(), TimePeriodOrderByWithRelationInputSchema]).optional(),
  cursor: TimePeriodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([TimePeriodScalarFieldEnumSchema, TimePeriodScalarFieldEnumSchema.array()]).optional()
}).strict();
var TimePeriodFindFirstArgsSchema_default = TimePeriodFindFirstArgsSchema;

export {
  TimePeriodSelectSchema,
  TimePeriodFindFirstArgsSchema,
  TimePeriodFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-L5AJAUY3.js.map