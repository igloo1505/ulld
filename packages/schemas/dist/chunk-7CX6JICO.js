import {
  RandomImageWhereInputSchema
} from "./chunk-XSVMF53C.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";

// src/database/inputTypeSchemas/RandomImageWhereUniqueInputSchema.ts
import { z } from "zod";
var RandomImageWhereUniqueInputSchema = z.object({
  path: z.string()
}).and(z.object({
  path: z.string().optional(),
  AND: z.union([z.lazy(() => RandomImageWhereInputSchema), z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => RandomImageWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => RandomImageWhereInputSchema), z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict());
var RandomImageWhereUniqueInputSchema_default = RandomImageWhereUniqueInputSchema;

export {
  RandomImageWhereUniqueInputSchema,
  RandomImageWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-7CX6JICO.js.map