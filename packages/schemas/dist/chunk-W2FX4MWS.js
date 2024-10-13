import {
  BusinessContactWhereInputSchema
} from "./chunk-RT67XEWS.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/BusinessContactWhereUniqueInputSchema.ts
import { z } from "zod";
var BusinessContactWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => BusinessContactWhereInputSchema), z.lazy(() => BusinessContactWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => BusinessContactWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => BusinessContactWhereInputSchema), z.lazy(() => BusinessContactWhereInputSchema).array()]).optional(),
  companyName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  contactName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  contactPreference: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  message: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  purpose: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict());
var BusinessContactWhereUniqueInputSchema_default = BusinessContactWhereUniqueInputSchema;

export {
  BusinessContactWhereUniqueInputSchema,
  BusinessContactWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-W2FX4MWS.js.map