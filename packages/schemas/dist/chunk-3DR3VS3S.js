import {
  NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema
} from "./chunk-KRRAP6PU.js";
import {
  NestedEnumQUANTITY_GUESSNullableFilterSchema
} from "./chunk-FXL5EPFC.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-LUUG3TNG.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-45PPNBUK.js";

// src/database/inputTypeSchemas/EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  in: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  not: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema).optional()
}).strict();
var EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default = EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema;

export {
  EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema,
  EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-3DR3VS3S.js.map