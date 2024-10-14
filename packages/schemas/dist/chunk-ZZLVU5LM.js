import {
  EnumautoSettingFilterSchema
} from "./chunk-SIPHN6ID.js";
import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/AutoSettingWhereInputSchema.ts
import { z } from "zod";
var AutoSettingWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => AutoSettingWhereInputSchema), z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => AutoSettingWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AutoSettingWhereInputSchema), z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  type: z.union([z.lazy(() => EnumautoSettingFilterSchema), z.lazy(() => autoSettingSchema)]).optional(),
  glob: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
}).strict();
var AutoSettingWhereInputSchema_default = AutoSettingWhereInputSchema;

export {
  AutoSettingWhereInputSchema,
  AutoSettingWhereInputSchema_default
};
//# sourceMappingURL=chunk-ZZLVU5LM.js.map