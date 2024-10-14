import {
  DietUpdateToOneWithWhereWithoutHealthReportInputSchema
} from "./chunk-BULTUPKI.js";
import {
  DietUpsertWithoutHealthReportInputSchema
} from "./chunk-5UAZUEH2.js";
import {
  DietUncheckedUpdateWithoutHealthReportInputSchema
} from "./chunk-7WVD7GHK.js";
import {
  DietUpdateWithoutHealthReportInputSchema
} from "./chunk-YKXDQQO7.js";
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
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/inputTypeSchemas/DietUpdateOneWithoutHealthReportNestedInputSchema.ts
import { z } from "zod";
var DietUpdateOneWithoutHealthReportNestedInputSchema = z.object({
  create: z.union([z.lazy(() => DietCreateWithoutHealthReportInputSchema), z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutHealthReportInputSchema).optional(),
  upsert: z.lazy(() => DietUpsertWithoutHealthReportInputSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DietWhereInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DietWhereInputSchema)]).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => DietUpdateToOneWithWhereWithoutHealthReportInputSchema), z.lazy(() => DietUpdateWithoutHealthReportInputSchema), z.lazy(() => DietUncheckedUpdateWithoutHealthReportInputSchema)]).optional()
}).strict();
var DietUpdateOneWithoutHealthReportNestedInputSchema_default = DietUpdateOneWithoutHealthReportNestedInputSchema;

export {
  DietUpdateOneWithoutHealthReportNestedInputSchema,
  DietUpdateOneWithoutHealthReportNestedInputSchema_default
};
//# sourceMappingURL=chunk-VK2L35CR.js.map