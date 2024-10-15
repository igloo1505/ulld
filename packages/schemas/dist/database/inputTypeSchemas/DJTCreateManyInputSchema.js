import { z } from 'zod';
export const DJTCreateManyInputSchema = z.object({
    id: z.number().int().optional(),
    type: z.string(),
    data: z.instanceof(Buffer)
}).strict();
export default DJTCreateManyInputSchema;
