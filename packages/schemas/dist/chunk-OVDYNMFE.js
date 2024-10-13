import {
  DietUpdateToOneWithWhereWithoutHealthReportInputSchema
} from "./chunk-6P3UX6TZ.js";
import {
  DietUpsertWithoutHealthReportInputSchema
} from "./chunk-C4RJWOYE.js";
import {
  DietUncheckedUpdateWithoutHealthReportInputSchema
} from "./chunk-GINO7ZO7.js";
import {
  DietUpdateWithoutHealthReportInputSchema
} from "./chunk-ULOMH6EF.js";
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
import {
  DietWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-OVDYNMFE.js.map