import {
  NestedBoolFilterSchema
} from "./chunk-UNK6Q7TJ.js";

// src/database/inputTypeSchemas/BoolFilterSchema.ts
import { z } from "zod";
var BoolFilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional()
}).strict();
var BoolFilterSchema_default = BoolFilterSchema;

export {
  BoolFilterSchema,
  BoolFilterSchema_default
};
//# sourceMappingURL=chunk-SXFFRDDB.js.map