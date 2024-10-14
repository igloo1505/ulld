import {
  NestedBoolNullableWithAggregatesFilterSchema
} from "./chunk-OHJLXHO5.js";
import {
  NestedBoolNullableFilterSchema
} from "./chunk-QRRELMSU.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-45PPNBUK.js";

// src/database/inputTypeSchemas/BoolNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var BoolNullableWithAggregatesFilterSchema = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();
var BoolNullableWithAggregatesFilterSchema_default = BoolNullableWithAggregatesFilterSchema;

export {
  BoolNullableWithAggregatesFilterSchema,
  BoolNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-LOUCVNWL.js.map