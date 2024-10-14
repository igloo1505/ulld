import {
  HealthReportCreateManyInputSchema
} from "./chunk-32NZMHWH.js";

// src/database/outputTypeSchemas/HealthReportCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var HealthReportCreateManyAndReturnArgsSchema = z.object({
  data: z.union([HealthReportCreateManyInputSchema, HealthReportCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var HealthReportCreateManyAndReturnArgsSchema_default = HealthReportCreateManyAndReturnArgsSchema;

export {
  HealthReportCreateManyAndReturnArgsSchema,
  HealthReportCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-GL2UH4W2.js.map