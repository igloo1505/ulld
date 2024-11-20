import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumImageAlignmentWithAggregatesFilterSchema } from './EnumImageAlignmentWithAggregatesFilterSchema';
import { ImageAlignmentSchema } from './ImageAlignmentSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const SettingsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SettingsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema),z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema),z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tooltips: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  summary_showCitations: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  summary_showTags: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  landingImageAlign: z.union([ z.lazy(() => EnumImageAlignmentWithAggregatesFilterSchema),z.lazy(() => ImageAlignmentSchema) ]).optional(),
  lockedLandingImage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  cleanOnSync: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  plotTheme: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  firstSync: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default SettingsScalarWhereWithAggregatesInputSchema;
