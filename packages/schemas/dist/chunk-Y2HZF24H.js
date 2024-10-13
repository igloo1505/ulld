import {
  DietCreateWithoutHealthReportInputSchema
} from "./chunk-7IKYAPQK.js";
import {
  DietUncheckedCreateWithoutHealthReportInputSchema
} from "./chunk-VXBISZAI.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";

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
//# sourceMappingURL=chunk-Y2HZF24H.js.map