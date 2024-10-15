import { z } from 'zod';
export const StringFieldUpdateOperationsInputSchema = z.object({
    set: z.string().optional()
}).strict();
export default StringFieldUpdateOperationsInputSchema;
