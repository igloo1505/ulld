import {
  HealthReportSelectSchema
} from "./chunk-2RSY6UEU.js";
import {
  HealthReportIncludeSchema
} from "./chunk-QGBCG46B.js";

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
//# sourceMappingURL=chunk-NP3LA37T.js.map