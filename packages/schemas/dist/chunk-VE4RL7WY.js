import {
  HealthReportCreateManyCurrentDietInputSchema
} from "./chunk-EVPZWLSH.js";

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
//# sourceMappingURL=chunk-VE4RL7WY.js.map