import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";

// src/database/inputTypeSchemas/NestedEnumQUANTITY_GUESSNullableFilterSchema.ts
import { z } from "zod";
var NestedEnumQUANTITY_GUESSNullableFilterSchema = z.object({
  equals: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  in: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  not: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedEnumQUANTITY_GUESSNullableFilterSchema_default = NestedEnumQUANTITY_GUESSNullableFilterSchema;

export {
  NestedEnumQUANTITY_GUESSNullableFilterSchema,
  NestedEnumQUANTITY_GUESSNullableFilterSchema_default
};
//# sourceMappingURL=chunk-TMFHWK36.js.map