import { z } from 'zod';
import { RelatedValuesSelectSchema } from '../inputTypeSchemas/RelatedValuesSelectSchema.js';
import { RelatedValuesIncludeSchema } from '../inputTypeSchemas/RelatedValuesIncludeSchema.js';
export const RelatedValuesArgsSchema = z.object({
    select: z.lazy(() => RelatedValuesSelectSchema).optional(),
    include: z.lazy(() => RelatedValuesIncludeSchema).optional(),
}).strict();
export default RelatedValuesArgsSchema;
