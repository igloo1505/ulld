import {
  DietArgsSchema,
  TimePeriodIncludeSchema
} from "./chunk-QGBCG46B.js";
import {
  TimePeriodOrderByWithRelationInputSchema
} from "./chunk-GRGGNGU4.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-OOJJ4BEA.js";
import {
  TimePeriodScalarFieldEnumSchema
} from "./chunk-SUDI43CV.js";
import {
  TimePeriodWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-LRKLPJTO.js.map