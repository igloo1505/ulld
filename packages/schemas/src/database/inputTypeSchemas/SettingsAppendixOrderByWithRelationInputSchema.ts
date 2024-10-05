import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SettingsAppendixOrderByRelevanceInputSchema } from './SettingsAppendixOrderByRelevanceInputSchema';

export const SettingsAppendixOrderByWithRelationInputSchema: z.ZodType<Prisma.SettingsAppendixOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => SettingsAppendixOrderByRelevanceInputSchema).optional()
}).strict();

export default SettingsAppendixOrderByWithRelationInputSchema;
