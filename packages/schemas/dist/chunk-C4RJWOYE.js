import {
  DietUncheckedUpdateWithoutHealthReportInputSchema
} from "./chunk-GINO7ZO7.js";
import {
  DietUpdateWithoutHealthReportInputSchema
} from "./chunk-ULOMH6EF.js";
import {
  DietCreateWithoutHealthReportInputSchema
} from "./chunk-7IKYAPQK.js";
import {
  DietUncheckedCreateWithoutHealthReportInputSchema
} from "./chunk-VXBISZAI.js";
import {
  DietWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/inputTypeSchemas/DietUpsertWithoutHealthReportInputSchema.ts
import { z } from "zod";
var DietUpsertWithoutHealthReportInputSchema = z.object({
  update: z.union([z.lazy(() => DietUpdateWithoutHealthReportInputSchema), z.lazy(() => DietUncheckedUpdateWithoutHealthReportInputSchema)]),
  create: z.union([z.lazy(() => DietCreateWithoutHealthReportInputSchema), z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema)]),
  where: z.lazy(() => DietWhereInputSchema).optional()
}).strict();
var DietUpsertWithoutHealthReportInputSchema_default = DietUpsertWithoutHealthReportInputSchema;

export {
  DietUpsertWithoutHealthReportInputSchema,
  DietUpsertWithoutHealthReportInputSchema_default
};
//# sourceMappingURL=chunk-C4RJWOYE.js.map