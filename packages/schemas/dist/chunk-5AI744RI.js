import {
  NestedBoolNullableFilterSchema
} from "./chunk-SZO4EVJO.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-QMPBSEPP.js";

// src/database/inputTypeSchemas/NestedBoolNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedBoolNullableWithAggregatesFilterSchema = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();
var NestedBoolNullableWithAggregatesFilterSchema_default = NestedBoolNullableWithAggregatesFilterSchema;

export {
  NestedBoolNullableWithAggregatesFilterSchema,
  NestedBoolNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-5AI744RI.js.map