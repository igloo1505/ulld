import { z } from 'zod';
import { FeatureRequestOrderByRelevanceFieldEnumSchema } from './FeatureRequestOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const FeatureRequestOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => FeatureRequestOrderByRelevanceFieldEnumSchema), z.lazy(() => FeatureRequestOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default FeatureRequestOrderByRelevanceInputSchema;
