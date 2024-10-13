import {
  NestedEnumQUANTITY_GUESSNullableFilterSchema
} from "./chunk-TMFHWK36.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";

// src/database/inputTypeSchemas/EnumQUANTITY_GUESSNullableFilterSchema.ts
import { z } from "zod";
var EnumQUANTITY_GUESSNullableFilterSchema = z.object({
  equals: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  in: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  not: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema)]).optional().nullable()
}).strict();
var EnumQUANTITY_GUESSNullableFilterSchema_default = EnumQUANTITY_GUESSNullableFilterSchema;

export {
  EnumQUANTITY_GUESSNullableFilterSchema,
  EnumQUANTITY_GUESSNullableFilterSchema_default
};
//# sourceMappingURL=chunk-MR4VDJQU.js.map