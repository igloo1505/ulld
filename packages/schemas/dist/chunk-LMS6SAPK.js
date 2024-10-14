import {
  HealthReportCreateManyCurrentDietInputSchema
} from "./chunk-NUJNZYIW.js";

// src/database/inputTypeSchemas/HealthReportCreateManyCurrentDietInputEnvelopeSchema.ts
import { z } from "zod";
var HealthReportCreateManyCurrentDietInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => HealthReportCreateManyCurrentDietInputSchema), z.lazy(() => HealthReportCreateManyCurrentDietInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var HealthReportCreateManyCurrentDietInputEnvelopeSchema_default = HealthReportCreateManyCurrentDietInputEnvelopeSchema;

export {
  HealthReportCreateManyCurrentDietInputEnvelopeSchema,
  HealthReportCreateManyCurrentDietInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-LMS6SAPK.js.map