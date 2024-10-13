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
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/DietScalarWhereInputSchema.ts
import { z } from "zod";
var DietScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => DietScalarWhereInputSchema), z.lazy(() => DietScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DietScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DietScalarWhereInputSchema), z.lazy(() => DietScalarWhereInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
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
  lastUpdate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var DietScalarWhereInputSchema_default = DietScalarWhereInputSchema;

export {
  DietScalarWhereInputSchema,
  DietScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-FAEQNT2D.js.map