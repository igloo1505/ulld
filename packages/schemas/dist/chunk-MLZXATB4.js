import {
  NestedEnumQUANTITY_GUESSNullableFilterSchema
} from "./chunk-TMFHWK36.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-QMPBSEPP.js";

// src/database/inputTypeSchemas/NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  in: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  not: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema).optional()
}).strict();
var NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default = NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema;

export {
  NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema,
  NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-MLZXATB4.js.map