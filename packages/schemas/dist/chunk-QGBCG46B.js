import {
  DietCountOutputTypeArgsSchema
} from "./chunk-FIAJ5STT.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";
import {
  DietScalarFieldEnumSchema
} from "./chunk-N2FLSVTN.js";
import {
  DietaryItemCountOutputTypeArgsSchema
} from "./chunk-WK5AC27N.js";
import {
  DietaryItemScalarFieldEnumSchema
} from "./chunk-C62SPGOO.js";
import {
  HealthReportOrderByWithRelationInputSchema
} from "./chunk-A3VY7CY6.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-S23BCLNO.js";
import {
  HealthReportScalarFieldEnumSchema
} from "./chunk-PXXMWZSN.js";
import {
  ServingOrderByWithRelationInputSchema
} from "./chunk-DTXNG57P.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-XBJQZROE.js";
import {
  DietaryItemOrderByWithRelationInputSchema
} from "./chunk-WLJXWNSV.js";
import {
  ServingScalarFieldEnumSchema
} from "./chunk-RQONZRAX.js";
import {
  TimePeriodOrderByWithRelationInputSchema
} from "./chunk-GRGGNGU4.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-OOJJ4BEA.js";
import {
  DietOrderByWithRelationInputSchema
} from "./chunk-WI5K43UV.js";
import {
  TimePeriodScalarFieldEnumSchema
} from "./chunk-SUDI43CV.js";
import {
  DietWhereInputSchema,
  DietaryItemWhereInputSchema,
  HealthReportWhereInputSchema,
  ServingWhereInputSchema,
  TimePeriodWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/inputTypeSchemas/TimePeriodIncludeSchema.ts
import { z as z14 } from "zod";

// src/database/outputTypeSchemas/DietArgsSchema.ts
import { z as z13 } from "zod";

// src/database/inputTypeSchemas/DietSelectSchema.ts
import { z as z12 } from "zod";

// src/database/outputTypeSchemas/DietaryItemFindManyArgsSchema.ts
import { z as z11 } from "zod";

// src/database/inputTypeSchemas/DietaryItemIncludeSchema.ts
import { z as z10 } from "zod";

// src/database/outputTypeSchemas/DietFindManyArgsSchema.ts
import { z as z5 } from "zod";

// src/database/inputTypeSchemas/DietIncludeSchema.ts
import { z as z4 } from "zod";

// src/database/outputTypeSchemas/TimePeriodFindManyArgsSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodFindManyArgsSchema = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: TimePeriodWhereInputSchema.optional(),
  orderBy: z.union([TimePeriodOrderByWithRelationInputSchema.array(), TimePeriodOrderByWithRelationInputSchema]).optional(),
  cursor: TimePeriodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([TimePeriodScalarFieldEnumSchema, TimePeriodScalarFieldEnumSchema.array()]).optional()
}).strict();
var TimePeriodFindManyArgsSchema_default = TimePeriodFindManyArgsSchema;

// src/database/outputTypeSchemas/HealthReportFindManyArgsSchema.ts
import { z as z3 } from "zod";

// src/database/inputTypeSchemas/HealthReportIncludeSchema.ts
import { z as z2 } from "zod";
var HealthReportIncludeSchema = z2.object({
  currentDiet: z2.union([z2.boolean(), z2.lazy(() => DietArgsSchema)]).optional()
}).strict();
var HealthReportIncludeSchema_default = HealthReportIncludeSchema;

// src/database/outputTypeSchemas/HealthReportFindManyArgsSchema.ts
var HealthReportSelectSchema = z3.object({
  id: z3.boolean().optional(),
  title: z3.boolean().optional(),
  summary: z3.boolean().optional(),
  overall: z3.boolean().optional(),
  skin: z3.boolean().optional(),
  bloat: z3.boolean().optional(),
  weight_feeling: z3.boolean().optional(),
  fullness: z3.boolean().optional(),
  weight: z3.boolean().optional(),
  cardiacCapacity: z3.boolean().optional(),
  jawLine: z3.boolean().optional(),
  joints: z3.boolean().optional(),
  flexibility: z3.boolean().optional(),
  anxiety: z3.boolean().optional(),
  anxiety_desc: z3.boolean().optional(),
  mood_desc: z3.boolean().optional(),
  mood: z3.boolean().optional(),
  sexDrive: z3.boolean().optional(),
  intruisiveThoughts: z3.boolean().optional(),
  caffeineIntake: z3.boolean().optional(),
  glutenIntake: z3.boolean().optional(),
  sugarIntake: z3.boolean().optional(),
  artificialSweetenerIntake: z3.boolean().optional(),
  artificalDyes: z3.boolean().optional(),
  sleepQuality: z3.boolean().optional(),
  hydration: z3.boolean().optional(),
  twitching: z3.boolean().optional(),
  sleepHours: z3.boolean().optional(),
  calorie_est: z3.boolean().optional(),
  times_meals_more_than_gap_apart: z3.boolean().optional(),
  estHoursInExcessFast: z3.boolean().optional(),
  dietId: z3.boolean().optional(),
  created: z3.boolean().optional(),
  currentDiet: z3.union([z3.boolean(), z3.lazy(() => DietArgsSchema)]).optional()
}).strict();
var HealthReportFindManyArgsSchema = z3.object({
  select: HealthReportSelectSchema.optional(),
  include: HealthReportIncludeSchema.optional(),
  where: HealthReportWhereInputSchema.optional(),
  orderBy: z3.union([HealthReportOrderByWithRelationInputSchema.array(), HealthReportOrderByWithRelationInputSchema]).optional(),
  cursor: HealthReportWhereUniqueInputSchema.optional(),
  take: z3.number().optional(),
  skip: z3.number().optional(),
  distinct: z3.union([HealthReportScalarFieldEnumSchema, HealthReportScalarFieldEnumSchema.array()]).optional()
}).strict();
var HealthReportFindManyArgsSchema_default = HealthReportFindManyArgsSchema;

// src/database/inputTypeSchemas/DietIncludeSchema.ts
var DietIncludeSchema = z4.object({
  items: z4.union([z4.boolean(), z4.lazy(() => DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: z4.union([z4.boolean(), z4.lazy(() => TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: z4.union([z4.boolean(), z4.lazy(() => HealthReportFindManyArgsSchema)]).optional(),
  _count: z4.union([z4.boolean(), z4.lazy(() => DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietIncludeSchema_default = DietIncludeSchema;

// src/database/outputTypeSchemas/DietFindManyArgsSchema.ts
var DietSelectSchema = z5.object({
  name: z5.boolean().optional(),
  summary: z5.boolean().optional(),
  activelyFollowing: z5.boolean().optional(),
  gf: z5.boolean().optional(),
  vegan: z5.boolean().optional(),
  pescatarian: z5.boolean().optional(),
  vegetarian: z5.boolean().optional(),
  fasting: z5.boolean().optional(),
  cardioTraining: z5.boolean().optional(),
  weightTraining: z5.boolean().optional(),
  carb: z5.boolean().optional(),
  pro: z5.boolean().optional(),
  fat: z5.boolean().optional(),
  goals: z5.boolean().optional(),
  created: z5.boolean().optional(),
  lastUpdate: z5.boolean().optional(),
  items: z5.union([z5.boolean(), z5.lazy(() => DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: z5.union([z5.boolean(), z5.lazy(() => TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: z5.union([z5.boolean(), z5.lazy(() => HealthReportFindManyArgsSchema)]).optional(),
  _count: z5.union([z5.boolean(), z5.lazy(() => DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietFindManyArgsSchema = z5.object({
  select: DietSelectSchema.optional(),
  include: DietIncludeSchema.optional(),
  where: DietWhereInputSchema.optional(),
  orderBy: z5.union([DietOrderByWithRelationInputSchema.array(), DietOrderByWithRelationInputSchema]).optional(),
  cursor: DietWhereUniqueInputSchema.optional(),
  take: z5.number().optional(),
  skip: z5.number().optional(),
  distinct: z5.union([DietScalarFieldEnumSchema, DietScalarFieldEnumSchema.array()]).optional()
}).strict();
var DietFindManyArgsSchema_default = DietFindManyArgsSchema;

// src/database/outputTypeSchemas/ServingFindManyArgsSchema.ts
import { z as z9 } from "zod";

// src/database/inputTypeSchemas/ServingIncludeSchema.ts
import { z as z8 } from "zod";

// src/database/outputTypeSchemas/DietaryItemArgsSchema.ts
import { z as z7 } from "zod";

// src/database/inputTypeSchemas/DietaryItemSelectSchema.ts
import { z as z6 } from "zod";
var DietaryItemSelectSchema = z6.object({
  id: z6.boolean().optional(),
  name: z6.boolean().optional(),
  barcode: z6.boolean().optional(),
  gi: z6.boolean().optional(),
  calsPerOz: z6.boolean().optional(),
  glutenFree: z6.boolean().optional(),
  minimalFructose: z6.boolean().optional(),
  natural: z6.boolean().optional(),
  organic: z6.boolean().optional(),
  impactScore: z6.boolean().optional(),
  Diet: z6.union([z6.boolean(), z6.lazy(() => DietFindManyArgsSchema)]).optional(),
  Serving: z6.union([z6.boolean(), z6.lazy(() => ServingFindManyArgsSchema)]).optional(),
  _count: z6.union([z6.boolean(), z6.lazy(() => DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemSelectSchema_default = DietaryItemSelectSchema;

// src/database/outputTypeSchemas/DietaryItemArgsSchema.ts
var DietaryItemArgsSchema = z7.object({
  select: z7.lazy(() => DietaryItemSelectSchema).optional(),
  include: z7.lazy(() => DietaryItemIncludeSchema).optional()
}).strict();
var DietaryItemArgsSchema_default = DietaryItemArgsSchema;

// src/database/inputTypeSchemas/ServingIncludeSchema.ts
var ServingIncludeSchema = z8.object({
  item: z8.union([z8.boolean(), z8.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingIncludeSchema_default = ServingIncludeSchema;

// src/database/outputTypeSchemas/ServingFindManyArgsSchema.ts
var ServingSelectSchema = z9.object({
  id: z9.boolean().optional(),
  dietaryItemId: z9.boolean().optional(),
  quant_oz: z9.boolean().optional(),
  quant_guess: z9.boolean().optional(),
  item: z9.union([z9.boolean(), z9.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindManyArgsSchema = z9.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: ServingWhereInputSchema.optional(),
  orderBy: z9.union([ServingOrderByWithRelationInputSchema.array(), ServingOrderByWithRelationInputSchema]).optional(),
  cursor: ServingWhereUniqueInputSchema.optional(),
  take: z9.number().optional(),
  skip: z9.number().optional(),
  distinct: z9.union([ServingScalarFieldEnumSchema, ServingScalarFieldEnumSchema.array()]).optional()
}).strict();
var ServingFindManyArgsSchema_default = ServingFindManyArgsSchema;

// src/database/inputTypeSchemas/DietaryItemIncludeSchema.ts
var DietaryItemIncludeSchema = z10.object({
  Diet: z10.union([z10.boolean(), z10.lazy(() => DietFindManyArgsSchema)]).optional(),
  Serving: z10.union([z10.boolean(), z10.lazy(() => ServingFindManyArgsSchema)]).optional(),
  _count: z10.union([z10.boolean(), z10.lazy(() => DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemIncludeSchema_default = DietaryItemIncludeSchema;

// src/database/outputTypeSchemas/DietaryItemFindManyArgsSchema.ts
var DietaryItemSelectSchema2 = z11.object({
  id: z11.boolean().optional(),
  name: z11.boolean().optional(),
  barcode: z11.boolean().optional(),
  gi: z11.boolean().optional(),
  calsPerOz: z11.boolean().optional(),
  glutenFree: z11.boolean().optional(),
  minimalFructose: z11.boolean().optional(),
  natural: z11.boolean().optional(),
  organic: z11.boolean().optional(),
  impactScore: z11.boolean().optional(),
  Diet: z11.union([z11.boolean(), z11.lazy(() => DietFindManyArgsSchema)]).optional(),
  Serving: z11.union([z11.boolean(), z11.lazy(() => ServingFindManyArgsSchema)]).optional(),
  _count: z11.union([z11.boolean(), z11.lazy(() => DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemFindManyArgsSchema = z11.object({
  select: DietaryItemSelectSchema2.optional(),
  include: DietaryItemIncludeSchema.optional(),
  where: DietaryItemWhereInputSchema.optional(),
  orderBy: z11.union([DietaryItemOrderByWithRelationInputSchema.array(), DietaryItemOrderByWithRelationInputSchema]).optional(),
  cursor: DietaryItemWhereUniqueInputSchema.optional(),
  take: z11.number().optional(),
  skip: z11.number().optional(),
  distinct: z11.union([DietaryItemScalarFieldEnumSchema, DietaryItemScalarFieldEnumSchema.array()]).optional()
}).strict();
var DietaryItemFindManyArgsSchema_default = DietaryItemFindManyArgsSchema;

// src/database/inputTypeSchemas/DietSelectSchema.ts
var DietSelectSchema2 = z12.object({
  name: z12.boolean().optional(),
  summary: z12.boolean().optional(),
  activelyFollowing: z12.boolean().optional(),
  gf: z12.boolean().optional(),
  vegan: z12.boolean().optional(),
  pescatarian: z12.boolean().optional(),
  vegetarian: z12.boolean().optional(),
  fasting: z12.boolean().optional(),
  cardioTraining: z12.boolean().optional(),
  weightTraining: z12.boolean().optional(),
  carb: z12.boolean().optional(),
  pro: z12.boolean().optional(),
  fat: z12.boolean().optional(),
  goals: z12.boolean().optional(),
  created: z12.boolean().optional(),
  lastUpdate: z12.boolean().optional(),
  items: z12.union([z12.boolean(), z12.lazy(() => DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: z12.union([z12.boolean(), z12.lazy(() => TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: z12.union([z12.boolean(), z12.lazy(() => HealthReportFindManyArgsSchema)]).optional(),
  _count: z12.union([z12.boolean(), z12.lazy(() => DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietSelectSchema_default = DietSelectSchema2;

// src/database/outputTypeSchemas/DietArgsSchema.ts
var DietArgsSchema = z13.object({
  select: z13.lazy(() => DietSelectSchema2).optional(),
  include: z13.lazy(() => DietIncludeSchema).optional()
}).strict();
var DietArgsSchema_default = DietArgsSchema;

// src/database/inputTypeSchemas/TimePeriodIncludeSchema.ts
var TimePeriodIncludeSchema = z14.object({
  Diet: z14.union([z14.boolean(), z14.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodIncludeSchema_default = TimePeriodIncludeSchema;

export {
  TimePeriodIncludeSchema,
  TimePeriodIncludeSchema_default,
  TimePeriodSelectSchema,
  TimePeriodFindManyArgsSchema,
  TimePeriodFindManyArgsSchema_default,
  HealthReportIncludeSchema,
  HealthReportIncludeSchema_default,
  HealthReportSelectSchema,
  HealthReportFindManyArgsSchema,
  HealthReportFindManyArgsSchema_default,
  DietIncludeSchema,
  DietIncludeSchema_default,
  DietSelectSchema,
  DietFindManyArgsSchema,
  DietFindManyArgsSchema_default,
  DietaryItemSelectSchema,
  DietaryItemSelectSchema_default,
  DietaryItemArgsSchema,
  DietaryItemArgsSchema_default,
  ServingIncludeSchema,
  ServingIncludeSchema_default,
  ServingSelectSchema,
  ServingFindManyArgsSchema,
  ServingFindManyArgsSchema_default,
  DietaryItemIncludeSchema,
  DietaryItemIncludeSchema_default,
  DietaryItemSelectSchema2,
  DietaryItemFindManyArgsSchema,
  DietaryItemFindManyArgsSchema_default,
  DietSelectSchema2,
  DietSelectSchema_default,
  DietArgsSchema,
  DietArgsSchema_default
};
//# sourceMappingURL=chunk-QGBCG46B.js.map