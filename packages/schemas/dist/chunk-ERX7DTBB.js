import {
  HealthReportCreateManyInputSchema
} from "./chunk-5ZMCTBXD.js";

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
//# sourceMappingURL=chunk-ERX7DTBB.js.map