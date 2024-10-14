import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";

// src/database/inputTypeSchemas/IntFilterSchema.ts
import { z } from "zod";
var IntFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional()
}).strict();
var IntFilterSchema_default = IntFilterSchema;

export {
  IntFilterSchema,
  IntFilterSchema_default
};
//# sourceMappingURL=chunk-EMYNQWE7.js.map