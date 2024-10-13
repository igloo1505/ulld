import {
  CitationsGroupSelectSchema
} from "./chunk-FLVQJFZV.js";
import {
  CitationsGroupIncludeSchema
} from "./chunk-YNCDDFUC.js";

// src/database/outputTypeSchemas/CitationsGroupArgsSchema.ts
import { z } from "zod";
var CitationsGroupArgsSchema = z.object({
  select: z.lazy(() => CitationsGroupSelectSchema).optional(),
  include: z.lazy(() => CitationsGroupIncludeSchema).optional()
}).strict();
var CitationsGroupArgsSchema_default = CitationsGroupArgsSchema;

export {
  CitationsGroupArgsSchema,
  CitationsGroupArgsSchema_default
};
//# sourceMappingURL=chunk-57ZGLAZ4.js.map