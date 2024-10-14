import {
  NestedDateTimeNullableFilterSchema
} from "./chunk-XSZJGJZO.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-45PPNBUK.js";

// src/database/inputTypeSchemas/NestedDateTimeNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedDateTimeNullableWithAggregatesFilterSchema = z.object({
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
var NestedDateTimeNullableWithAggregatesFilterSchema_default = NestedDateTimeNullableWithAggregatesFilterSchema;

export {
  NestedDateTimeNullableWithAggregatesFilterSchema,
  NestedDateTimeNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-QGQG76J7.js.map