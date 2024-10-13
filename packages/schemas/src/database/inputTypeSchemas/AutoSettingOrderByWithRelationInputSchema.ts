import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { AutoSettingOrderByRelevanceInputSchema } from '../AutoSettingOrderByRelevanceInputSchema.js';
export const AutoSettingOrderByWithRelationInputSchema: z.ZodType<Prisma.AutoSettingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  glob: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => AutoSettingOrderByRelevanceInputSchema).optional()
}).strict();
export default AutoSettingOrderByWithRelationInputSchema;