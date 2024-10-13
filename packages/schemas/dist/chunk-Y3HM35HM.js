import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SettingsMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var SettingsMaxOrderByAggregateInputSchema = z.object({
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
var SettingsMaxOrderByAggregateInputSchema_default = SettingsMaxOrderByAggregateInputSchema;

export {
  SettingsMaxOrderByAggregateInputSchema,
  SettingsMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-Y3HM35HM.js.map