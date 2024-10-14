import {
  ServingSelectSchema
} from "./chunk-NIKW2YVF.js";
import {
  ServingIncludeSchema
} from "./chunk-KDYZAD52.js";

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
//# sourceMappingURL=chunk-BYJMAJ3M.js.map