import {
  EnumImageAlignmentWithAggregatesFilterSchema
} from "./chunk-VCG442UM.js";
import {
  JsonWithAggregatesFilterSchema
} from "./chunk-HTFCS32S.js";
import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";
import {
  BoolWithAggregatesFilterSchema
} from "./chunk-ZZUY2PNT.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/SettingsScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var SettingsScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema), z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema), z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  tooltips: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  summary_showCitations: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  summary_showTags: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  landingImageAlign: z.union([z.lazy(() => EnumImageAlignmentWithAggregatesFilterSchema), z.lazy(() => ImageAlignmentSchema)]).optional(),
  lockedLandingImage: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  cleanOnSync: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  plotTheme: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  pluginSettings: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  firstSync: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastSync: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var SettingsScalarWhereWithAggregatesInputSchema_default = SettingsScalarWhereWithAggregatesInputSchema;

export {
  SettingsScalarWhereWithAggregatesInputSchema,
  SettingsScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-VCDOFBF4.js.map