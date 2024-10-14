import {
  EnumImageAlignmentFilterSchema
} from "./chunk-4ADLVWHU.js";
import {
  ImageAlignmentSchema
} from "./chunk-XOBHDDTF.js";
import {
  JsonFilterSchema
} from "./chunk-V2TZ67XY.js";
import {
  BoolFilterSchema
} from "./chunk-K637VO4C.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/SettingsWhereInputSchema.ts
import { z } from "zod";
var SettingsWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => SettingsWhereInputSchema), z.lazy(() => SettingsWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SettingsWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingsWhereInputSchema), z.lazy(() => SettingsWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  tooltips: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  summary_showCitations: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  summary_showTags: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  landingImageAlign: z.union([z.lazy(() => EnumImageAlignmentFilterSchema), z.lazy(() => ImageAlignmentSchema)]).optional(),
  lockedLandingImage: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  cleanOnSync: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  plotTheme: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  pluginSettings: z.lazy(() => JsonFilterSchema).optional(),
  firstSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var SettingsWhereInputSchema_default = SettingsWhereInputSchema;

export {
  SettingsWhereInputSchema,
  SettingsWhereInputSchema_default
};
//# sourceMappingURL=chunk-ULKFREWN.js.map