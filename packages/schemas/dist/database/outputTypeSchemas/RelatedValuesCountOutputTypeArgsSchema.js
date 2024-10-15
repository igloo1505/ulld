import { z } from 'zod';
import { RelatedValuesCountOutputTypeSelectSchema } from './RelatedValuesCountOutputTypeSelectSchema.js';
export const RelatedValuesCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => RelatedValuesCountOutputTypeSelectSchema).nullish(),
}).strict();
export default RelatedValuesCountOutputTypeSelectSchema;
