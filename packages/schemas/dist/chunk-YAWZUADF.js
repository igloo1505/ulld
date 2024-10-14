import {
  HealthReportCreateManyInputSchema
} from "./chunk-32NZMHWH.js";

// src/database/outputTypeSchemas/HealthReportCreateManyArgsSchema.ts
import { z } from "zod";
var HealthReportCreateManyArgsSchema = z.object({
  data: z.union([HealthReportCreateManyInputSchema, HealthReportCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var HealthReportCreateManyArgsSchema_default = HealthReportCreateManyArgsSchema;

export {
  HealthReportCreateManyArgsSchema,
  HealthReportCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-YAWZUADF.js.map