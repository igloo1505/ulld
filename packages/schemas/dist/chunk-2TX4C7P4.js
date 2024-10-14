import {
  EnumDIETARY_GOALNullableListFilterSchema
} from "./chunk-CWSHQA3B.js";
import {
  EnumTERTIARY_TOGGLEFilterSchema
} from "./chunk-ZOOTEKRM.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-FGDZJV6T.js";
import {
  FloatNullableFilterSchema
} from "./chunk-MDL32JOO.js";
import {
  BoolFilterSchema
} from "./chunk-K637VO4C.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-2TX4C7P4.js.map