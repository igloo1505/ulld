import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

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
//# sourceMappingURL=chunk-U7V5V5ZX.js.map