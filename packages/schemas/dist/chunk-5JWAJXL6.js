import {
  DietIncludeSchema,
  DietaryItemFindManyArgsSchema,
  HealthReportFindManyArgsSchema,
  TimePeriodFindManyArgsSchema
} from "./chunk-QGBCG46B.js";
import {
  DietCountOutputTypeArgsSchema
} from "./chunk-FIAJ5STT.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";

// src/database/outputTypeSchemas/DietFindUniqueOrThrowArgsSchema.ts
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
var DietFindUniqueOrThrowArgsSchema = z.object({
  select: DietSelectSchema.optional(),
  include: DietIncludeSchema.optional(),
  where: DietWhereUniqueInputSchema
}).strict();
var DietFindUniqueOrThrowArgsSchema_default = DietFindUniqueOrThrowArgsSchema;

export {
  DietSelectSchema,
  DietFindUniqueOrThrowArgsSchema,
  DietFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-5JWAJXL6.js.map