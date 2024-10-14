import {
  HealthReportCreateWithoutCurrentDietInputSchema
} from "./chunk-KYVFT7YD.js";
import {
  HealthReportUncheckedCreateWithoutCurrentDietInputSchema
} from "./chunk-ALI3VRL3.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-LZNACEQH.js";

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
//# sourceMappingURL=chunk-TTSQK4GS.js.map