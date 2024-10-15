import { z } from 'zod';
import { DefinitionOrderByRelevanceFieldEnumSchema } from './DefinitionOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DefinitionOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => DefinitionOrderByRelevanceFieldEnumSchema), z.lazy(() => DefinitionOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default DefinitionOrderByRelevanceInputSchema;
