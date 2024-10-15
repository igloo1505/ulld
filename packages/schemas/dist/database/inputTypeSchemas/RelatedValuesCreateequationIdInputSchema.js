import { z } from 'zod';
export const RelatedValuesCreateequationIdInputSchema = z.object({
    set: z.number().array()
}).strict();
export default RelatedValuesCreateequationIdInputSchema;
