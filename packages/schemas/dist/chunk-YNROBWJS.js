import {
  HealthReportUncheckedUpdateWithoutCurrentDietInputSchema
} from "./chunk-7MSH5UYS.js";
import {
  HealthReportUpdateWithoutCurrentDietInputSchema
} from "./chunk-K2XEOQKB.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-S23BCLNO.js";

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
//# sourceMappingURL=chunk-YNROBWJS.js.map