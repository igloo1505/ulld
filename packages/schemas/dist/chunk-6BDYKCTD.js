import {
  AutoSettingWhereInputSchema
} from "./chunk-ZZLVU5LM.js";
import {
  EnumautoSettingFilterSchema
} from "./chunk-SIPHN6ID.js";
import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-6BDYKCTD.js.map