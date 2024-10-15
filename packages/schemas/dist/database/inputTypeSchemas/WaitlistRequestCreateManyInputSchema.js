import { z } from 'zod';
export const WaitlistRequestCreateManyInputSchema = z.object({
    id: z.number().int().optional(),
    email: z.string(),
    receivedOn: z.coerce.date().optional(),
    emailsSent: z.number().int().optional()
}).strict();
export default WaitlistRequestCreateManyInputSchema;
