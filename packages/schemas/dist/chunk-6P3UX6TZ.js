import {
  DietUncheckedUpdateWithoutHealthReportInputSchema
} from "./chunk-GINO7ZO7.js";
import {
  DietUpdateWithoutHealthReportInputSchema
} from "./chunk-ULOMH6EF.js";
import {
  DietWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-6P3UX6TZ.js.map