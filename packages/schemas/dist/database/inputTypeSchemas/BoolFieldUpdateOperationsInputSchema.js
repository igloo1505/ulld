import { z } from 'zod';
export const BoolFieldUpdateOperationsInputSchema = z.object({
    set: z.boolean().optional()
}).strict();
export default BoolFieldUpdateOperationsInputSchema;
