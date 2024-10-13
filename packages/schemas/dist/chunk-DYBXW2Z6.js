import {
  NestedBoolNullableWithAggregatesFilterSchema
} from "./chunk-5AI744RI.js";
import {
  NestedBoolNullableFilterSchema
} from "./chunk-SZO4EVJO.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-QMPBSEPP.js";

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
//# sourceMappingURL=chunk-DYBXW2Z6.js.map