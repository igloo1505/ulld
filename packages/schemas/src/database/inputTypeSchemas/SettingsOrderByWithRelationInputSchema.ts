import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { SettingsOrderByRelevanceInputSchema } from './SettingsOrderByRelevanceInputSchema.js';
export const SettingsOrderByWithRelationInputSchema: z.ZodType<Prisma.SettingsOrderByWithRelationInput> = z.object({
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
  _relevance: z.lazy(() => SettingsOrderByRelevanceInputSchema).optional()
}).strict();
export default SettingsOrderByWithRelationInputSchema;