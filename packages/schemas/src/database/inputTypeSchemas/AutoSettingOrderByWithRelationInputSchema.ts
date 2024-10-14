import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AutoSettingOrderByRelevanceInputSchema } from './AutoSettingOrderByRelevanceInputSchema';

export const AutoSettingOrderByWithRelationInputSchema: z.ZodType<Prisma.AutoSettingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  glob: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => AutoSettingOrderByRelevanceInputSchema).optional()
}).strict();

export default AutoSettingOrderByWithRelationInputSchema;
