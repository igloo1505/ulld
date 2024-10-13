import {
  EnumDIETARY_GOALNullableListFilterSchema
} from "./chunk-Y337Q65M.js";
import {
  EnumTERTIARY_TOGGLEFilterSchema
} from "./chunk-3ERXWYU5.js";
import {
  EnumQUANTITY_GUESSNullableFilterSchema
} from "./chunk-MR4VDJQU.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-XO3OVOME.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";
import {
  FloatFilterSchema
} from "./chunk-DX2UN7V4.js";
import {
  FloatNullableFilterSchema
} from "./chunk-MDJNRMXP.js";
import {
  DateTimeNullableFilterSchema
} from "./chunk-GCZZHHO4.js";
import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  BoolFilterSchema
} from "./chunk-SXFFRDDB.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/DietListRelationFilterSchema.ts
import { z as z12 } from "zod";

// src/database/inputTypeSchemas/DietWhereInputSchema.ts
import { z as z11 } from "zod";

// src/database/inputTypeSchemas/DietaryItemListRelationFilterSchema.ts
import { z as z5 } from "zod";

// src/database/inputTypeSchemas/DietaryItemWhereInputSchema.ts
import { z as z4 } from "zod";

// src/database/inputTypeSchemas/ServingListRelationFilterSchema.ts
import { z as z3 } from "zod";

// src/database/inputTypeSchemas/ServingWhereInputSchema.ts
import { z as z2 } from "zod";

// src/database/inputTypeSchemas/DietaryItemRelationFilterSchema.ts
import { z } from "zod";
var DietaryItemRelationFilterSchema = z.object({
  is: z.lazy(() => DietaryItemWhereInputSchema).optional(),
  isNot: z.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();
var DietaryItemRelationFilterSchema_default = DietaryItemRelationFilterSchema;

// src/database/inputTypeSchemas/ServingWhereInputSchema.ts
var ServingWhereInputSchema = z2.object({
  AND: z2.union([z2.lazy(() => ServingWhereInputSchema), z2.lazy(() => ServingWhereInputSchema).array()]).optional(),
  OR: z2.lazy(() => ServingWhereInputSchema).array().optional(),
  NOT: z2.union([z2.lazy(() => ServingWhereInputSchema), z2.lazy(() => ServingWhereInputSchema).array()]).optional(),
  id: z2.union([z2.lazy(() => IntFilterSchema), z2.number()]).optional(),
  dietaryItemId: z2.union([z2.lazy(() => IntFilterSchema), z2.number()]).optional(),
  quant_oz: z2.union([z2.lazy(() => FloatNullableFilterSchema), z2.number()]).optional().nullable(),
  quant_guess: z2.union([z2.lazy(() => EnumQUANTITY_GUESSNullableFilterSchema), z2.lazy(() => QUANTITY_GUESSSchema)]).optional().nullable(),
  item: z2.union([z2.lazy(() => DietaryItemRelationFilterSchema), z2.lazy(() => DietaryItemWhereInputSchema)]).optional()
}).strict();
var ServingWhereInputSchema_default = ServingWhereInputSchema;

// src/database/inputTypeSchemas/ServingListRelationFilterSchema.ts
var ServingListRelationFilterSchema = z3.object({
  every: z3.lazy(() => ServingWhereInputSchema).optional(),
  some: z3.lazy(() => ServingWhereInputSchema).optional(),
  none: z3.lazy(() => ServingWhereInputSchema).optional()
}).strict();
var ServingListRelationFilterSchema_default = ServingListRelationFilterSchema;

// src/database/inputTypeSchemas/DietaryItemWhereInputSchema.ts
var DietaryItemWhereInputSchema = z4.object({
  AND: z4.union([z4.lazy(() => DietaryItemWhereInputSchema), z4.lazy(() => DietaryItemWhereInputSchema).array()]).optional(),
  OR: z4.lazy(() => DietaryItemWhereInputSchema).array().optional(),
  NOT: z4.union([z4.lazy(() => DietaryItemWhereInputSchema), z4.lazy(() => DietaryItemWhereInputSchema).array()]).optional(),
  id: z4.union([z4.lazy(() => IntFilterSchema), z4.number()]).optional(),
  name: z4.union([z4.lazy(() => StringFilterSchema), z4.string()]).optional(),
  barcode: z4.union([z4.lazy(() => StringNullableFilterSchema), z4.string()]).optional().nullable(),
  gi: z4.union([z4.lazy(() => IntNullableFilterSchema), z4.number()]).optional().nullable(),
  calsPerOz: z4.union([z4.lazy(() => FloatNullableFilterSchema), z4.number()]).optional().nullable(),
  glutenFree: z4.union([z4.lazy(() => BoolFilterSchema), z4.boolean()]).optional(),
  minimalFructose: z4.union([z4.lazy(() => BoolFilterSchema), z4.boolean()]).optional(),
  natural: z4.union([z4.lazy(() => BoolFilterSchema), z4.boolean()]).optional(),
  organic: z4.union([z4.lazy(() => BoolFilterSchema), z4.boolean()]).optional(),
  impactScore: z4.union([z4.lazy(() => FloatFilterSchema), z4.number()]).optional(),
  Diet: z4.lazy(() => DietListRelationFilterSchema).optional(),
  Serving: z4.lazy(() => ServingListRelationFilterSchema).optional()
}).strict();
var DietaryItemWhereInputSchema_default = DietaryItemWhereInputSchema;

// src/database/inputTypeSchemas/DietaryItemListRelationFilterSchema.ts
var DietaryItemListRelationFilterSchema = z5.object({
  every: z5.lazy(() => DietaryItemWhereInputSchema).optional(),
  some: z5.lazy(() => DietaryItemWhereInputSchema).optional(),
  none: z5.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();
var DietaryItemListRelationFilterSchema_default = DietaryItemListRelationFilterSchema;

// src/database/inputTypeSchemas/TimePeriodListRelationFilterSchema.ts
import { z as z8 } from "zod";

// src/database/inputTypeSchemas/TimePeriodWhereInputSchema.ts
import { z as z7 } from "zod";

// src/database/inputTypeSchemas/DietNullableRelationFilterSchema.ts
import { z as z6 } from "zod";
var DietNullableRelationFilterSchema = z6.object({
  is: z6.lazy(() => DietWhereInputSchema).optional().nullable(),
  isNot: z6.lazy(() => DietWhereInputSchema).optional().nullable()
}).strict();
var DietNullableRelationFilterSchema_default = DietNullableRelationFilterSchema;

// src/database/inputTypeSchemas/TimePeriodWhereInputSchema.ts
var TimePeriodWhereInputSchema = z7.object({
  AND: z7.union([z7.lazy(() => TimePeriodWhereInputSchema), z7.lazy(() => TimePeriodWhereInputSchema).array()]).optional(),
  OR: z7.lazy(() => TimePeriodWhereInputSchema).array().optional(),
  NOT: z7.union([z7.lazy(() => TimePeriodWhereInputSchema), z7.lazy(() => TimePeriodWhereInputSchema).array()]).optional(),
  id: z7.union([z7.lazy(() => IntFilterSchema), z7.number()]).optional(),
  start: z7.union([z7.lazy(() => DateTimeFilterSchema), z7.coerce.date()]).optional(),
  end: z7.union([z7.lazy(() => DateTimeNullableFilterSchema), z7.coerce.date()]).optional().nullable(),
  dietId: z7.union([z7.lazy(() => StringNullableFilterSchema), z7.string()]).optional().nullable(),
  Diet: z7.union([z7.lazy(() => DietNullableRelationFilterSchema), z7.lazy(() => DietWhereInputSchema)]).optional().nullable()
}).strict();
var TimePeriodWhereInputSchema_default = TimePeriodWhereInputSchema;

// src/database/inputTypeSchemas/TimePeriodListRelationFilterSchema.ts
var TimePeriodListRelationFilterSchema = z8.object({
  every: z8.lazy(() => TimePeriodWhereInputSchema).optional(),
  some: z8.lazy(() => TimePeriodWhereInputSchema).optional(),
  none: z8.lazy(() => TimePeriodWhereInputSchema).optional()
}).strict();
var TimePeriodListRelationFilterSchema_default = TimePeriodListRelationFilterSchema;

// src/database/inputTypeSchemas/HealthReportListRelationFilterSchema.ts
import { z as z10 } from "zod";

// src/database/inputTypeSchemas/HealthReportWhereInputSchema.ts
import { z as z9 } from "zod";
var HealthReportWhereInputSchema = z9.object({
  AND: z9.union([z9.lazy(() => HealthReportWhereInputSchema), z9.lazy(() => HealthReportWhereInputSchema).array()]).optional(),
  OR: z9.lazy(() => HealthReportWhereInputSchema).array().optional(),
  NOT: z9.union([z9.lazy(() => HealthReportWhereInputSchema), z9.lazy(() => HealthReportWhereInputSchema).array()]).optional(),
  id: z9.union([z9.lazy(() => IntFilterSchema), z9.number()]).optional(),
  title: z9.union([z9.lazy(() => StringNullableFilterSchema), z9.string()]).optional().nullable(),
  summary: z9.union([z9.lazy(() => StringNullableFilterSchema), z9.string()]).optional().nullable(),
  overall: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  skin: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  bloat: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  weight_feeling: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  fullness: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  weight: z9.union([z9.lazy(() => FloatNullableFilterSchema), z9.number()]).optional().nullable(),
  cardiacCapacity: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  jawLine: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  joints: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  flexibility: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  anxiety: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  anxiety_desc: z9.union([z9.lazy(() => StringNullableFilterSchema), z9.string()]).optional().nullable(),
  mood_desc: z9.union([z9.lazy(() => StringNullableFilterSchema), z9.string()]).optional().nullable(),
  mood: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  sexDrive: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  intruisiveThoughts: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  caffeineIntake: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  glutenIntake: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  sugarIntake: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  artificialSweetenerIntake: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  artificalDyes: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  sleepQuality: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  hydration: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  twitching: z9.union([z9.lazy(() => FloatFilterSchema), z9.number()]).optional(),
  sleepHours: z9.union([z9.lazy(() => FloatNullableFilterSchema), z9.number()]).optional().nullable(),
  calorie_est: z9.union([z9.lazy(() => IntNullableFilterSchema), z9.number()]).optional().nullable(),
  times_meals_more_than_gap_apart: z9.union([z9.lazy(() => IntNullableFilterSchema), z9.number()]).optional().nullable(),
  estHoursInExcessFast: z9.union([z9.lazy(() => FloatNullableFilterSchema), z9.number()]).optional().nullable(),
  dietId: z9.union([z9.lazy(() => StringNullableFilterSchema), z9.string()]).optional().nullable(),
  created: z9.union([z9.lazy(() => DateTimeFilterSchema), z9.coerce.date()]).optional(),
  currentDiet: z9.union([z9.lazy(() => DietNullableRelationFilterSchema), z9.lazy(() => DietWhereInputSchema)]).optional().nullable()
}).strict();
var HealthReportWhereInputSchema_default = HealthReportWhereInputSchema;

// src/database/inputTypeSchemas/HealthReportListRelationFilterSchema.ts
var HealthReportListRelationFilterSchema = z10.object({
  every: z10.lazy(() => HealthReportWhereInputSchema).optional(),
  some: z10.lazy(() => HealthReportWhereInputSchema).optional(),
  none: z10.lazy(() => HealthReportWhereInputSchema).optional()
}).strict();
var HealthReportListRelationFilterSchema_default = HealthReportListRelationFilterSchema;

// src/database/inputTypeSchemas/DietWhereInputSchema.ts
var DietWhereInputSchema = z11.object({
  AND: z11.union([z11.lazy(() => DietWhereInputSchema), z11.lazy(() => DietWhereInputSchema).array()]).optional(),
  OR: z11.lazy(() => DietWhereInputSchema).array().optional(),
  NOT: z11.union([z11.lazy(() => DietWhereInputSchema), z11.lazy(() => DietWhereInputSchema).array()]).optional(),
  name: z11.union([z11.lazy(() => StringFilterSchema), z11.string()]).optional(),
  summary: z11.union([z11.lazy(() => StringNullableFilterSchema), z11.string()]).optional().nullable(),
  activelyFollowing: z11.union([z11.lazy(() => BoolFilterSchema), z11.boolean()]).optional(),
  gf: z11.union([z11.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z11.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  vegan: z11.union([z11.lazy(() => BoolFilterSchema), z11.boolean()]).optional(),
  pescatarian: z11.union([z11.lazy(() => BoolFilterSchema), z11.boolean()]).optional(),
  vegetarian: z11.union([z11.lazy(() => BoolFilterSchema), z11.boolean()]).optional(),
  fasting: z11.union([z11.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z11.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  cardioTraining: z11.union([z11.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z11.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  weightTraining: z11.union([z11.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z11.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  carb: z11.union([z11.lazy(() => FloatNullableFilterSchema), z11.number()]).optional().nullable(),
  pro: z11.union([z11.lazy(() => FloatNullableFilterSchema), z11.number()]).optional().nullable(),
  fat: z11.union([z11.lazy(() => FloatNullableFilterSchema), z11.number()]).optional().nullable(),
  goals: z11.lazy(() => EnumDIETARY_GOALNullableListFilterSchema).optional(),
  created: z11.union([z11.lazy(() => DateTimeFilterSchema), z11.coerce.date()]).optional(),
  lastUpdate: z11.union([z11.lazy(() => DateTimeFilterSchema), z11.coerce.date()]).optional(),
  items: z11.lazy(() => DietaryItemListRelationFilterSchema).optional(),
  periodsFollowed: z11.lazy(() => TimePeriodListRelationFilterSchema).optional(),
  HealthReport: z11.lazy(() => HealthReportListRelationFilterSchema).optional()
}).strict();
var DietWhereInputSchema_default = DietWhereInputSchema;

// src/database/inputTypeSchemas/DietListRelationFilterSchema.ts
var DietListRelationFilterSchema = z12.object({
  every: z12.lazy(() => DietWhereInputSchema).optional(),
  some: z12.lazy(() => DietWhereInputSchema).optional(),
  none: z12.lazy(() => DietWhereInputSchema).optional()
}).strict();
var DietListRelationFilterSchema_default = DietListRelationFilterSchema;

export {
  DietListRelationFilterSchema,
  DietListRelationFilterSchema_default,
  DietaryItemRelationFilterSchema,
  DietaryItemRelationFilterSchema_default,
  ServingWhereInputSchema,
  ServingWhereInputSchema_default,
  ServingListRelationFilterSchema,
  ServingListRelationFilterSchema_default,
  DietaryItemWhereInputSchema,
  DietaryItemWhereInputSchema_default,
  DietaryItemListRelationFilterSchema,
  DietaryItemListRelationFilterSchema_default,
  TimePeriodListRelationFilterSchema,
  TimePeriodListRelationFilterSchema_default,
  HealthReportWhereInputSchema,
  HealthReportWhereInputSchema_default,
  HealthReportListRelationFilterSchema,
  HealthReportListRelationFilterSchema_default,
  DietWhereInputSchema,
  DietWhereInputSchema_default,
  DietNullableRelationFilterSchema,
  DietNullableRelationFilterSchema_default,
  TimePeriodWhereInputSchema,
  TimePeriodWhereInputSchema_default
};
//# sourceMappingURL=chunk-4FCA5YKO.js.map