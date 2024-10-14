import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/RandomImageWhereInputSchema.ts
import { z } from "zod";
var RandomImageWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => RandomImageWhereInputSchema), z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => RandomImageWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => RandomImageWhereInputSchema), z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
  path: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var RandomImageWhereInputSchema_default = RandomImageWhereInputSchema;

export {
  RandomImageWhereInputSchema,
  RandomImageWhereInputSchema_default
};
//# sourceMappingURL=chunk-XSVMF53C.js.map