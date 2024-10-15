import { z } from 'zod';
export const DJTCreateInputSchema = z.object({
    type: z.string(),
    data: z.instanceof(Buffer)
}).strict();
export default DJTCreateInputSchema;
