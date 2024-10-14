import {
  NestedBoolFilterSchema
} from "./chunk-FAJNE46X.js";

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
//# sourceMappingURL=chunk-K637VO4C.js.map