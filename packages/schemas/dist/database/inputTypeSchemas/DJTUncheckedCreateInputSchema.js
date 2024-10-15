import { z } from 'zod';
export const DJTUncheckedCreateInputSchema = z.object({
    id: z.number().int().optional(),
    type: z.string(),
    data: z.instanceof(Buffer)
}).strict();
export default DJTUncheckedCreateInputSchema;
