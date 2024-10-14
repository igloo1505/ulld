import {
  EnumTERTIARY_TOGGLEWithAggregatesFilterSchema
} from "./chunk-HGNAAYVL.js";
import {
  FloatNullableWithAggregatesFilterSchema
} from "./chunk-DOHO4RJ2.js";
import {
  EnumDIETARY_GOALNullableListFilterSchema
} from "./chunk-CWSHQA3B.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-FGDZJV6T.js";
import {
  BoolWithAggregatesFilterSchema
} from "./chunk-YDWZQXJY.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/DietScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var DietScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => DietScalarWhereWithAggregatesInputSchema), z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DietScalarWhereWithAggregatesInputSchema), z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  summary: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  activelyFollowing: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  gf: z.union([z.lazy(() => EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  vegan: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  pescatarian: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  vegetarian: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  fasting: z.union([z.lazy(() => EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  cardioTraining: z.union([z.lazy(() => EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  weightTraining: z.union([z.lazy(() => EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
  carb: z.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  pro: z.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  fat: z.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  goals: z.lazy(() => EnumDIETARY_GOALNullableListFilterSchema).optional(),
  created: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var DietScalarWhereWithAggregatesInputSchema_default = DietScalarWhereWithAggregatesInputSchema;

export {
  DietScalarWhereWithAggregatesInputSchema,
  DietScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-U7YE55KC.js.map