import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SettingsCountOrderByAggregateInputSchema } from './SettingsCountOrderByAggregateInputSchema';
import { SettingsAvgOrderByAggregateInputSchema } from './SettingsAvgOrderByAggregateInputSchema';
import { SettingsMaxOrderByAggregateInputSchema } from './SettingsMaxOrderByAggregateInputSchema';
import { SettingsMinOrderByAggregateInputSchema } from './SettingsMinOrderByAggregateInputSchema';
import { SettingsSumOrderByAggregateInputSchema } from './SettingsSumOrderByAggregateInputSchema';

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
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SettingsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SettingsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SettingsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SettingsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SettingsSumOrderByAggregateInputSchema).optional()
}).strict();

export default SettingsOrderByWithAggregationInputSchema;
