import { z } from 'zod';
export const WaitlistRequestSelectSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    receivedOn: z.boolean().optional(),
    emailsSent: z.boolean().optional(),
}).strict();
export default WaitlistRequestSelectSchema;
