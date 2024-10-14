import {
  HealthReportUncheckedUpdateWithoutCurrentDietInputSchema
} from "./chunk-CDKSXKCJ.js";
import {
  HealthReportUpdateWithoutCurrentDietInputSchema
} from "./chunk-OAVEMSQ2.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-LZNACEQH.js";

// src/database/inputTypeSchemas/HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema.ts
import { z } from "zod";
var HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema = z.object({
  where: z.lazy(() => HealthReportWhereUniqueInputSchema),
  data: z.union([z.lazy(() => HealthReportUpdateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUncheckedUpdateWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema;

export {
  HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema,
  HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema_default
};
//# sourceMappingURL=chunk-PHWATHLA.js.map