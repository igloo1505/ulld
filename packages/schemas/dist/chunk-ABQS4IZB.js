import {
  HealthReportUncheckedUpdateManyInputSchema
} from "./chunk-RDGC3GLL.js";
import {
  HealthReportUpdateManyMutationInputSchema
} from "./chunk-I63KI2MN.js";
import {
  HealthReportWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/HealthReportUpdateManyArgsSchema.ts
import { z } from "zod";
var HealthReportUpdateManyArgsSchema = z.object({
  data: z.union([HealthReportUpdateManyMutationInputSchema, HealthReportUncheckedUpdateManyInputSchema]),
  where: HealthReportWhereInputSchema.optional()
}).strict();
var HealthReportUpdateManyArgsSchema_default = HealthReportUpdateManyArgsSchema;

export {
  HealthReportUpdateManyArgsSchema,
  HealthReportUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-ABQS4IZB.js.map