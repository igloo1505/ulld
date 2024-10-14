import {
  DietIncludeSchema,
  DietaryItemFindManyArgsSchema,
  HealthReportFindManyArgsSchema,
  TimePeriodFindManyArgsSchema
} from "./chunk-KDYZAD52.js";
import {
  DietCountOutputTypeArgsSchema
} from "./chunk-F7WREYKP.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";
import {
  DietScalarFieldEnumSchema
} from "./chunk-VPDMFHNI.js";
import {
  DietOrderByWithRelationInputSchema
} from "./chunk-4TP62LJL.js";
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/DietFindFirstArgsSchema.ts
import { z } from "zod";
var DietSelectSchema = z.object({
  name: z.boolean().optional(),
  summary: z.boolean().optional(),
  activelyFollowing: z.boolean().optional(),
  gf: z.boolean().optional(),
  vegan: z.boolean().optional(),
  pescatarian: z.boolean().optional(),
  vegetarian: z.boolean().optional(),
  fasting: z.boolean().optional(),
  cardioTraining: z.boolean().optional(),
  weightTraining: z.boolean().optional(),
  carb: z.boolean().optional(),
  pro: z.boolean().optional(),
  fat: z.boolean().optional(),
  goals: z.boolean().optional(),
  created: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: z.union([z.boolean(), z.lazy(() => TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: z.union([z.boolean(), z.lazy(() => HealthReportFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietFindFirstArgsSchema = z.object({
  select: DietSelectSchema.optional(),
  include: DietIncludeSchema.optional(),
  where: DietWhereInputSchema.optional(),
  orderBy: z.union([DietOrderByWithRelationInputSchema.array(), DietOrderByWithRelationInputSchema]).optional(),
  cursor: DietWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([DietScalarFieldEnumSchema, DietScalarFieldEnumSchema.array()]).optional()
}).strict();
var DietFindFirstArgsSchema_default = DietFindFirstArgsSchema;

export {
  DietSelectSchema,
  DietFindFirstArgsSchema,
  DietFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-MUMZCXEK.js.map