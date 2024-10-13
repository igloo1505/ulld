import {
  HealthReportScalarWhereInputSchema
} from "./chunk-VTRCTWP7.js";
import {
  HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema
} from "./chunk-PVFDGNX2.js";
import {
  HealthReportUpdateManyMutationInputSchema
} from "./chunk-I63KI2MN.js";

// src/database/inputTypeSchemas/HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema.ts
import { z } from "zod";
var HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema = z.object({
  where: z.lazy(() => HealthReportScalarWhereInputSchema),
  data: z.union([z.lazy(() => HealthReportUpdateManyMutationInputSchema), z.lazy(() => HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema_default = HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema;

export {
  HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema,
  HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema_default
};
//# sourceMappingURL=chunk-Z7LLYRV6.js.map