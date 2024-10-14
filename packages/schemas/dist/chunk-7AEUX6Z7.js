import {
  EnumImageAlignmentWithAggregatesFilterSchema
} from "./chunk-S4RQE52O.js";
import {
  JsonWithAggregatesFilterSchema
} from "./chunk-OSEN3URL.js";
import {
  ImageAlignmentSchema
} from "./chunk-XOBHDDTF.js";
import {
  BoolWithAggregatesFilterSchema
} from "./chunk-YDWZQXJY.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

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
//# sourceMappingURL=chunk-7AEUX6Z7.js.map