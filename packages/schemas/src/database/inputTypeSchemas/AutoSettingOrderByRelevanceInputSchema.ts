import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { AutoSettingOrderByRelevanceFieldEnumSchema } from '../AutoSettingOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const AutoSettingOrderByRelevanceInputSchema: z.ZodType<Prisma.AutoSettingOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AutoSettingOrderByRelevanceFieldEnumSchema),z.lazy(() => AutoSettingOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default AutoSettingOrderByRelevanceInputSchema;