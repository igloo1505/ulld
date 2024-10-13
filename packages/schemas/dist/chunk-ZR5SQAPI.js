import {
  NestedDateTimeWithAggregatesFilterSchema
} from "./chunk-REPJ4ONO.js";
import {
  NestedDateTimeFilterSchema
} from "./chunk-SH7LIRW4.js";
import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";

// src/database/inputTypeSchemas/DateTimeWithAggregatesFilterSchema.ts
import { z } from "zod";
var DateTimeWithAggregatesFilterSchema = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();
var DateTimeWithAggregatesFilterSchema_default = DateTimeWithAggregatesFilterSchema;

export {
  DateTimeWithAggregatesFilterSchema,
  DateTimeWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-ZR5SQAPI.js.map