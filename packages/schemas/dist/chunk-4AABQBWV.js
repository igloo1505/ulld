import {
  AutoSettingWhereInputSchema
} from "./chunk-I47O5T7B.js";
import {
  EnumautoSettingFilterSchema
} from "./chunk-AYYTJQYN.js";
import {
  autoSettingSchema
} from "./chunk-EK76L66X.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/AutoSettingWhereUniqueInputSchema.ts
import { z } from "zod";
var AutoSettingWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => AutoSettingWhereInputSchema), z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => AutoSettingWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AutoSettingWhereInputSchema), z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
  type: z.union([z.lazy(() => EnumautoSettingFilterSchema), z.lazy(() => autoSettingSchema)]).optional(),
  glob: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
}).strict());
var AutoSettingWhereUniqueInputSchema_default = AutoSettingWhereUniqueInputSchema;

export {
  AutoSettingWhereUniqueInputSchema,
  AutoSettingWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-4AABQBWV.js.map