import { z } from 'zod';
import { KanBanCardOrderByRelevanceFieldEnumSchema } from './KanBanCardOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const KanBanCardOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => KanBanCardOrderByRelevanceFieldEnumSchema), z.lazy(() => KanBanCardOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default KanBanCardOrderByRelevanceInputSchema;
