import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { SettingsCountOrderByAggregateInputSchema } from './SettingsCountOrderByAggregateInputSchema.js';
import { SettingsAvgOrderByAggregateInputSchema } from './SettingsAvgOrderByAggregateInputSchema.js';
import { SettingsMaxOrderByAggregateInputSchema } from './SettingsMaxOrderByAggregateInputSchema.js';
import { SettingsMinOrderByAggregateInputSchema } from './SettingsMinOrderByAggregateInputSchema.js';
import { SettingsSumOrderByAggregateInputSchema } from './SettingsSumOrderByAggregateInputSchema.js';
export const SettingsOrderByWithAggregationInputSchema: z.ZodType<Prisma.SettingsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tooltips: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  summary_showCitations: z.lazy(() => SortOrderSchema).optional(),
  summary_showTags: z.lazy(() => SortOrderSchema).optional(),
  landingImageAlign: z.lazy(() => SortOrderSchema).optional(),
  lockedLandingImage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  cleanOnSync: z.lazy(() => SortOrderSchema).optional(),
  plotTheme: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pluginSettings: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SettingsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SettingsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SettingsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SettingsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SettingsSumOrderByAggregateInputSchema).optional()
}).strict();
export default SettingsOrderByWithAggregationInputSchema;