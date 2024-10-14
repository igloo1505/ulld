import {
  HealthReportUncheckedUpdateWithoutCurrentDietInputSchema
} from "./chunk-CDKSXKCJ.js";
import {
  HealthReportUpdateWithoutCurrentDietInputSchema
} from "./chunk-OAVEMSQ2.js";
import {
  HealthReportCreateWithoutCurrentDietInputSchema
} from "./chunk-KYVFT7YD.js";
import {
  HealthReportUncheckedCreateWithoutCurrentDietInputSchema
} from "./chunk-ALI3VRL3.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-LZNACEQH.js";

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
//# sourceMappingURL=chunk-QYYYGHQU.js.map