import {
  DietWhereInputSchema,
  DietaryItemListRelationFilterSchema,
  HealthReportListRelationFilterSchema,
  TimePeriodListRelationFilterSchema
} from "./chunk-4FCA5YKO.js";
import {
  EnumDIETARY_GOALNullableListFilterSchema
} from "./chunk-Y337Q65M.js";
import {
  EnumTERTIARY_TOGGLEFilterSchema
} from "./chunk-3ERXWYU5.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-XO3OVOME.js";
import {
  FloatNullableFilterSchema
} from "./chunk-MDJNRMXP.js";
import {
  BoolFilterSchema
} from "./chunk-SXFFRDDB.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";

// src/database/inputTypeSchemas/DietWhereUniqueInputSchema.ts
import { z } from "zod";
var DietWhereUniqueInputSchema = z.object({
  name: z.string()
}).and(z.object({
  name: z.string().optional(),
  AND: z.union([z.lazy(() => DietWhereInputSchema), z.lazy(() => DietWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DietWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DietWhereInputSchema), z.lazy(() => DietWhereInputSchema).array()]).optional(),
  summary: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  activelyFollowing: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  gf: z.union([z.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  vegan: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  pescatarian: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  vegetarian: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  fasting: z.union([z.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  cardioTraining: z.union([z.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  weightTraining: z.union([z.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  carb: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  pro: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  fat: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  goals: z.lazy(() => EnumDIETARY_GOALNullableListFilterSchema).optional(),
  created: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  items: z.lazy(() => DietaryItemListRelationFilterSchema).optional(),
  periodsFollowed: z.lazy(() => TimePeriodListRelationFilterSchema).optional(),
  HealthReport: z.lazy(() => HealthReportListRelationFilterSchema).optional()
}).strict());
var DietWhereUniqueInputSchema_default = DietWhereUniqueInputSchema;

export {
  DietWhereUniqueInputSchema,
  DietWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-CDT5ANSD.js.map