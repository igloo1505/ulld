import {
  NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema
} from "./chunk-MLZXATB4.js";
import {
  NestedEnumQUANTITY_GUESSNullableFilterSchema
} from "./chunk-TMFHWK36.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-QMPBSEPP.js";

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
//# sourceMappingURL=chunk-SWCW5N3Y.js.map