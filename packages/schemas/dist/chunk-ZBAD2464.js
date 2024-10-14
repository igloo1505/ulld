import {
  HealthReportScalarWhereInputSchema
} from "./chunk-UJUD2OLY.js";
import {
  HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema
} from "./chunk-IR3L7V4C.js";
import {
  HealthReportUpdateManyMutationInputSchema
} from "./chunk-2NFPHPMS.js";

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
//# sourceMappingURL=chunk-ZBAD2464.js.map