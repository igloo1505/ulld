import {
  CitationsGroupSelectSchema
} from "./chunk-V2YBZKUZ.js";
import {
  CitationsGroupIncludeSchema
} from "./chunk-JV52BDQC.js";

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
//# sourceMappingURL=chunk-ODMPK73Z.js.map