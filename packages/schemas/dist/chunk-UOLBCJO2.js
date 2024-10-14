import {
  SettingsMaxOrderByAggregateInputSchema
} from "./chunk-RHYXKB75.js";
import {
  SettingsCountOrderByAggregateInputSchema
} from "./chunk-EZQZDN74.js";
import {
  SettingsAvgOrderByAggregateInputSchema
} from "./chunk-64OZTU42.js";
import {
  SettingsMinOrderByAggregateInputSchema
} from "./chunk-NBLG75QR.js";
import {
  SettingsSumOrderByAggregateInputSchema
} from "./chunk-XOJ3LHNM.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-UOLBCJO2.js.map