import {
  JsonFilterSchema
} from "./chunk-V2TZ67XY.js";
import {
  StringNullableListFilterSchema
} from "./chunk-7OQ35RBX.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/EquationScalarWhereInputSchema.ts
import { z } from "zod";
var EquationScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => EquationScalarWhereInputSchema), z.lazy(() => EquationScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => EquationScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => EquationScalarWhereInputSchema), z.lazy(() => EquationScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  equationId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  desc: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  asPython: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  variableLegend: z.lazy(() => JsonFilterSchema).optional(),
  variables: z.lazy(() => StringNullableListFilterSchema).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var EquationScalarWhereInputSchema_default = EquationScalarWhereInputSchema;

export {
  EquationScalarWhereInputSchema,
  EquationScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-34ND25JL.js.map