import { z } from 'zod';
export const DateTimeFieldUpdateOperationsInputSchema = z.object({
    set: z.coerce.date().optional()
}).strict();
export default DateTimeFieldUpdateOperationsInputSchema;
