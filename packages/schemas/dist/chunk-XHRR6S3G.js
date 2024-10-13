import {
  HealthReportCreateWithoutCurrentDietInputSchema
} from "./chunk-VC2H7SCP.js";
import {
  HealthReportUncheckedCreateWithoutCurrentDietInputSchema
} from "./chunk-PEGJXQ57.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-S23BCLNO.js";

// src/database/inputTypeSchemas/HealthReportCreateOrConnectWithoutCurrentDietInputSchema.ts
import { z } from "zod";
var HealthReportCreateOrConnectWithoutCurrentDietInputSchema = z.object({
  where: z.lazy(() => HealthReportWhereUniqueInputSchema),
  create: z.union([z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportCreateOrConnectWithoutCurrentDietInputSchema_default = HealthReportCreateOrConnectWithoutCurrentDietInputSchema;

export {
  HealthReportCreateOrConnectWithoutCurrentDietInputSchema,
  HealthReportCreateOrConnectWithoutCurrentDietInputSchema_default
};
//# sourceMappingURL=chunk-XHRR6S3G.js.map