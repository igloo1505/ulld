import {
  DietCreateWithoutHealthReportInputSchema
} from "./chunk-22MAFTM4.js";
import {
  DietUncheckedCreateWithoutHealthReportInputSchema
} from "./chunk-TC6DSP7C.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";

// src/database/inputTypeSchemas/DietCreateOrConnectWithoutHealthReportInputSchema.ts
import { z } from "zod";
var DietCreateOrConnectWithoutHealthReportInputSchema = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  create: z.union([z.lazy(() => DietCreateWithoutHealthReportInputSchema), z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema)])
}).strict();
var DietCreateOrConnectWithoutHealthReportInputSchema_default = DietCreateOrConnectWithoutHealthReportInputSchema;

export {
  DietCreateOrConnectWithoutHealthReportInputSchema,
  DietCreateOrConnectWithoutHealthReportInputSchema_default
};
//# sourceMappingURL=chunk-ABCV64GX.js.map