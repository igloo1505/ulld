import {
  DietUncheckedUpdateWithoutHealthReportInputSchema
} from "./chunk-7WVD7GHK.js";
import {
  DietUpdateWithoutHealthReportInputSchema
} from "./chunk-YKXDQQO7.js";
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/inputTypeSchemas/DietUpdateToOneWithWhereWithoutHealthReportInputSchema.ts
import { z } from "zod";
var DietUpdateToOneWithWhereWithoutHealthReportInputSchema = z.object({
  where: z.lazy(() => DietWhereInputSchema).optional(),
  data: z.union([z.lazy(() => DietUpdateWithoutHealthReportInputSchema), z.lazy(() => DietUncheckedUpdateWithoutHealthReportInputSchema)])
}).strict();
var DietUpdateToOneWithWhereWithoutHealthReportInputSchema_default = DietUpdateToOneWithWhereWithoutHealthReportInputSchema;

export {
  DietUpdateToOneWithWhereWithoutHealthReportInputSchema,
  DietUpdateToOneWithWhereWithoutHealthReportInputSchema_default
};
//# sourceMappingURL=chunk-BULTUPKI.js.map