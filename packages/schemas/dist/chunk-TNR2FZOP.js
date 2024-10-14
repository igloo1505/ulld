import {
  HealthReportSelectSchema
} from "./chunk-7MM3FMEA.js";
import {
  HealthReportIncludeSchema
} from "./chunk-KDYZAD52.js";

// src/database/outputTypeSchemas/HealthReportArgsSchema.ts
import { z } from "zod";
var HealthReportArgsSchema = z.object({
  select: z.lazy(() => HealthReportSelectSchema).optional(),
  include: z.lazy(() => HealthReportIncludeSchema).optional()
}).strict();
var HealthReportArgsSchema_default = HealthReportArgsSchema;

export {
  HealthReportArgsSchema,
  HealthReportArgsSchema_default
};
//# sourceMappingURL=chunk-TNR2FZOP.js.map