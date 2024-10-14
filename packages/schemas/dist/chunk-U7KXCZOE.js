import {
  HealthReportUncheckedUpdateManyInputSchema
} from "./chunk-TQRXQYE3.js";
import {
  HealthReportUpdateManyMutationInputSchema
} from "./chunk-2NFPHPMS.js";
import {
  HealthReportWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-U7KXCZOE.js.map