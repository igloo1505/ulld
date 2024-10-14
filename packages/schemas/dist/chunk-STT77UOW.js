import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/RandomImageScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var RandomImageScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema), z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema), z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  path: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var RandomImageScalarWhereWithAggregatesInputSchema_default = RandomImageScalarWhereWithAggregatesInputSchema;

export {
  RandomImageScalarWhereWithAggregatesInputSchema,
  RandomImageScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-STT77UOW.js.map