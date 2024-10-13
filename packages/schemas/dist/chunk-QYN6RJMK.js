import {
  NestedBoolNullableFilterSchema
} from "./chunk-SZO4EVJO.js";

// src/database/inputTypeSchemas/BoolNullableFilterSchema.ts
import { z } from "zod";
var BoolNullableFilterSchema = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableFilterSchema)]).optional().nullable()
}).strict();
var BoolNullableFilterSchema_default = BoolNullableFilterSchema;

export {
  BoolNullableFilterSchema,
  BoolNullableFilterSchema_default
};
//# sourceMappingURL=chunk-QYN6RJMK.js.map