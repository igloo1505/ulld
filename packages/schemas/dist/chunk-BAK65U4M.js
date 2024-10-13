import {
  DietCreateInputSchema
} from "./chunk-YT5MVQKB.js";
import {
  DietUncheckedCreateInputSchema
} from "./chunk-226LMAGH.js";
import {
  DietUncheckedUpdateInputSchema
} from "./chunk-AOBRQL6K.js";
import {
  DietUpdateInputSchema
} from "./chunk-6P3NJGBM.js";
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

// src/database/outputTypeSchemas/DietUpsertArgsSchema.ts
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
var DietUpsertArgsSchema = z.object({
  select: DietSelectSchema.optional(),
  include: DietIncludeSchema.optional(),
  where: DietWhereUniqueInputSchema,
  create: z.union([DietCreateInputSchema, DietUncheckedCreateInputSchema]),
  update: z.union([DietUpdateInputSchema, DietUncheckedUpdateInputSchema])
}).strict();
var DietUpsertArgsSchema_default = DietUpsertArgsSchema;

export {
  DietSelectSchema,
  DietUpsertArgsSchema,
  DietUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-BAK65U4M.js.map