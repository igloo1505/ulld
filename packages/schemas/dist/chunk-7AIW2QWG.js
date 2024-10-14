// src/database/inputTypeSchemas/NestedDateTimeFilterSchema.ts
import { z } from "zod";
var NestedDateTimeFilterSchema = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional()
}).strict();
var NestedDateTimeFilterSchema_default = NestedDateTimeFilterSchema;

export {
  NestedDateTimeFilterSchema,
  NestedDateTimeFilterSchema_default
};
//# sourceMappingURL=chunk-7AIW2QWG.js.map