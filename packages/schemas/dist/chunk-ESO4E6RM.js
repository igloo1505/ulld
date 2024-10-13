import {
  HealthReportUncheckedUpdateWithoutCurrentDietInputSchema
} from "./chunk-7MSH5UYS.js";
import {
  HealthReportUpdateWithoutCurrentDietInputSchema
} from "./chunk-K2XEOQKB.js";
import {
  HealthReportCreateWithoutCurrentDietInputSchema
} from "./chunk-VC2H7SCP.js";
import {
  HealthReportUncheckedCreateWithoutCurrentDietInputSchema
} from "./chunk-PEGJXQ57.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-S23BCLNO.js";

// src/database/inputTypeSchemas/HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema.ts
import { z } from "zod";
var HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema = z.object({
  where: z.lazy(() => HealthReportWhereUniqueInputSchema),
  update: z.union([z.lazy(() => HealthReportUpdateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUncheckedUpdateWithoutCurrentDietInputSchema)]),
  create: z.union([z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema;

export {
  HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema,
  HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema_default
};
//# sourceMappingURL=chunk-ESO4E6RM.js.map