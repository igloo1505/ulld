import {
  ServingSelectSchema
} from "./chunk-E3Q5NZ6L.js";
import {
  ServingIncludeSchema
} from "./chunk-QGBCG46B.js";

// src/database/outputTypeSchemas/ServingArgsSchema.ts
import { z } from "zod";
var ServingArgsSchema = z.object({
  select: z.lazy(() => ServingSelectSchema).optional(),
  include: z.lazy(() => ServingIncludeSchema).optional()
}).strict();
var ServingArgsSchema_default = ServingArgsSchema;

export {
  ServingArgsSchema,
  ServingArgsSchema_default
};
//# sourceMappingURL=chunk-7KHMT5ZA.js.map