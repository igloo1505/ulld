import {
  NestedDateTimeNullableWithAggregatesFilterSchema
} from "./chunk-CJOPFOZ4.js";
import {
  NestedDateTimeNullableFilterSchema
} from "./chunk-52MSB3JO.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-QMPBSEPP.js";

// src/database/inputTypeSchemas/DateTimeNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var DateTimeNullableWithAggregatesFilterSchema = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();
var DateTimeNullableWithAggregatesFilterSchema_default = DateTimeNullableWithAggregatesFilterSchema;

export {
  DateTimeNullableWithAggregatesFilterSchema,
  DateTimeNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-XC5DHP6E.js.map