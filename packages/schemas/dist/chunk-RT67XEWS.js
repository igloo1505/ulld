import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/BusinessContactWhereInputSchema.ts
import { z } from "zod";
var BusinessContactWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => BusinessContactWhereInputSchema), z.lazy(() => BusinessContactWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => BusinessContactWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => BusinessContactWhereInputSchema), z.lazy(() => BusinessContactWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  companyName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  contactName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  contactPreference: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  message: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  purpose: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var BusinessContactWhereInputSchema_default = BusinessContactWhereInputSchema;

export {
  BusinessContactWhereInputSchema,
  BusinessContactWhereInputSchema_default
};
//# sourceMappingURL=chunk-RT67XEWS.js.map