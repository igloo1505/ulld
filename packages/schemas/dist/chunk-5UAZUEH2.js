import {
  DietUncheckedUpdateWithoutHealthReportInputSchema
} from "./chunk-7WVD7GHK.js";
import {
  DietUpdateWithoutHealthReportInputSchema
} from "./chunk-YKXDQQO7.js";
import {
  DietCreateWithoutHealthReportInputSchema
} from "./chunk-22MAFTM4.js";
import {
  DietUncheckedCreateWithoutHealthReportInputSchema
} from "./chunk-TC6DSP7C.js";
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-5UAZUEH2.js.map