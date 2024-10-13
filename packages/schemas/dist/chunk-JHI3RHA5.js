import {
  NestedDateTimeFilterSchema
} from "./chunk-SH7LIRW4.js";

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
//# sourceMappingURL=chunk-JHI3RHA5.js.map