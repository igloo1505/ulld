import {
  DailyFocusWhereInputSchema
} from "./chunk-COZ5TAGF.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";

// src/database/inputTypeSchemas/DailyFocusWhereUniqueInputSchema.ts
import { z } from "zod";
var DailyFocusWhereUniqueInputSchema = z.object({
  value: z.string()
}).and(z.object({
  value: z.string().optional(),
  AND: z.union([z.lazy(() => DailyFocusWhereInputSchema), z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DailyFocusWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DailyFocusWhereInputSchema), z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict());
var DailyFocusWhereUniqueInputSchema_default = DailyFocusWhereUniqueInputSchema;

export {
  DailyFocusWhereUniqueInputSchema,
  DailyFocusWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-OFZ4JWLS.js.map