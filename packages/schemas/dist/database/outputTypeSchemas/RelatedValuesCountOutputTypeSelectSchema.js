import { z } from 'zod';
export const RelatedValuesCountOutputTypeSelectSchema = z.object({
    equations: z.boolean().optional(),
}).strict();
export default RelatedValuesCountOutputTypeSelectSchema;
