import {
  JsonFilterSchema
} from "./chunk-P3VE75MX.js";
import {
  StringNullableListFilterSchema
} from "./chunk-6ULEVKEC.js";
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
//# sourceMappingURL=chunk-KJCPJMDE.js.map