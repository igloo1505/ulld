import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/DailyFocusWhereInputSchema.ts
import { z } from "zod";
var DailyFocusWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => DailyFocusWhereInputSchema), z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DailyFocusWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DailyFocusWhereInputSchema), z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
  value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var DailyFocusWhereInputSchema_default = DailyFocusWhereInputSchema;

export {
  DailyFocusWhereInputSchema,
  DailyFocusWhereInputSchema_default
};
//# sourceMappingURL=chunk-COZ5TAGF.js.map