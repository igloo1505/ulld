import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SettingsMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var SettingsMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tooltips: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  summary_showCitations: z.lazy(() => SortOrderSchema).optional(),
  summary_showTags: z.lazy(() => SortOrderSchema).optional(),
  landingImageAlign: z.lazy(() => SortOrderSchema).optional(),
  lockedLandingImage: z.lazy(() => SortOrderSchema).optional(),
  cleanOnSync: z.lazy(() => SortOrderSchema).optional(),
  plotTheme: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SettingsMinOrderByAggregateInputSchema_default = SettingsMinOrderByAggregateInputSchema;

export {
  SettingsMinOrderByAggregateInputSchema,
  SettingsMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-NBLG75QR.js.map