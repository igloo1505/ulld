import {
  DietCreateOrConnectWithoutHealthReportInputSchema
} from "./chunk-ABCV64GX.js";
import {
  DietCreateWithoutHealthReportInputSchema
} from "./chunk-22MAFTM4.js";
import {
  DietUncheckedCreateWithoutHealthReportInputSchema
} from "./chunk-TC6DSP7C.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";

// src/database/inputTypeSchemas/DietCreateNestedOneWithoutHealthReportInputSchema.ts
import { z } from "zod";
var DietCreateNestedOneWithoutHealthReportInputSchema = z.object({
  create: z.union([z.lazy(() => DietCreateWithoutHealthReportInputSchema), z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutHealthReportInputSchema).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional()
}).strict();
var DietCreateNestedOneWithoutHealthReportInputSchema_default = DietCreateNestedOneWithoutHealthReportInputSchema;

export {
  DietCreateNestedOneWithoutHealthReportInputSchema,
  DietCreateNestedOneWithoutHealthReportInputSchema_default
};
//# sourceMappingURL=chunk-QM5IVDOI.js.map