import { z } from 'zod';
export const NullableDateTimeFieldUpdateOperationsInputSchema = z.object({
    set: z.coerce.date().optional().nullable()
}).strict();
export default NullableDateTimeFieldUpdateOperationsInputSchema;
