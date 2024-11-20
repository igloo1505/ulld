import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema';

export const SettingsCreateInputSchema: z.ZodType<Prisma.SettingsCreateInput> = z.object({
  id: z.number().int().optional(),
  tooltips: z.boolean().optional(),
  title: z.string().optional(),
  summary_showCitations: z.boolean().optional(),
  summary_showTags: z.boolean().optional(),
  landingImageAlign: z.lazy(() => ImageAlignmentSchema).optional(),
  lockedLandingImage: z.string().optional().nullable(),
  cleanOnSync: z.boolean().optional(),
  plotTheme: z.string().optional().nullable(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional()
}).strict();

export default SettingsCreateInputSchema;
