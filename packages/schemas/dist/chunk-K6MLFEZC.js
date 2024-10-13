import {
  SettingsOrderByRelevanceInputSchema
} from "./chunk-REWUXUMI.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SettingsOrderByWithRelationInputSchema.ts
import { z } from "zod";
var SettingsOrderByWithRelationInputSchema = z.object({
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
  _relevance: z.lazy(() => SettingsOrderByRelevanceInputSchema).optional()
}).strict();
var SettingsOrderByWithRelationInputSchema_default = SettingsOrderByWithRelationInputSchema;

export {
  SettingsOrderByWithRelationInputSchema,
  SettingsOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-K6MLFEZC.js.map