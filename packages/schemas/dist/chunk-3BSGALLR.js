import {
  SettingsMaxOrderByAggregateInputSchema
} from "./chunk-Y3HM35HM.js";
import {
  SettingsCountOrderByAggregateInputSchema
} from "./chunk-33XGHR4O.js";
import {
  SettingsAvgOrderByAggregateInputSchema
} from "./chunk-LTQS3TBK.js";
import {
  SettingsMinOrderByAggregateInputSchema
} from "./chunk-YEKLL6DR.js";
import {
  SettingsSumOrderByAggregateInputSchema
} from "./chunk-6RQ4FMXS.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SettingsOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var SettingsOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tooltips: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  summary_showCitations: z.lazy(() => SortOrderSchema).optional(),
  summary_showTags: z.lazy(() => SortOrderSchema).optional(),
  landingImageAlign: z.lazy(() => SortOrderSchema).optional(),
  lockedLandingImage: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  cleanOnSync: z.lazy(() => SortOrderSchema).optional(),
  plotTheme: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  pluginSettings: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SettingsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SettingsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SettingsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SettingsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SettingsSumOrderByAggregateInputSchema).optional()
}).strict();
var SettingsOrderByWithAggregationInputSchema_default = SettingsOrderByWithAggregationInputSchema;

export {
  SettingsOrderByWithAggregationInputSchema,
  SettingsOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-3BSGALLR.js.map