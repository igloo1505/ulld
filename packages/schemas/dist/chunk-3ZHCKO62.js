import {
  NestedDateTimeFilterSchema
} from "./chunk-7AIW2QWG.js";

// src/database/inputTypeSchemas/DateTimeFilterSchema.ts
import { z } from "zod";
var DateTimeFilterSchema = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional()
}).strict();
var DateTimeFilterSchema_default = DateTimeFilterSchema;

export {
  DateTimeFilterSchema,
  DateTimeFilterSchema_default
};
//# sourceMappingURL=chunk-3ZHCKO62.js.map