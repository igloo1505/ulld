import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/BusinessContactScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var BusinessContactScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema), z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema), z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  companyName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  contactName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  contactPreference: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  message: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  purpose: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var BusinessContactScalarWhereWithAggregatesInputSchema_default = BusinessContactScalarWhereWithAggregatesInputSchema;

export {
  BusinessContactScalarWhereWithAggregatesInputSchema,
  BusinessContactScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-MIDWEJJ4.js.map