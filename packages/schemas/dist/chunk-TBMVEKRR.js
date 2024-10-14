import {
  SettingsWhereInputSchema
} from "./chunk-ULKFREWN.js";
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
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/SettingsWhereUniqueInputSchema.ts
import { z } from "zod";
var SettingsWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => SettingsWhereInputSchema), z.lazy(() => SettingsWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SettingsWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingsWhereInputSchema), z.lazy(() => SettingsWhereInputSchema).array()]).optional(),
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
}).strict());
var SettingsWhereUniqueInputSchema_default = SettingsWhereUniqueInputSchema;

export {
  SettingsWhereUniqueInputSchema,
  SettingsWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-TBMVEKRR.js.map