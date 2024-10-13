import {
  DietCreateOrConnectWithoutHealthReportInputSchema
} from "./chunk-Y2HZF24H.js";
import {
  DietCreateWithoutHealthReportInputSchema
} from "./chunk-7IKYAPQK.js";
import {
  DietUncheckedCreateWithoutHealthReportInputSchema
} from "./chunk-VXBISZAI.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";

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
//# sourceMappingURL=chunk-PX3T3GLF.js.map