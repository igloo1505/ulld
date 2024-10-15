import { z } from 'zod';
import { WaitlistRequestCreateInputSchema } from '../inputTypeSchemas/WaitlistRequestCreateInputSchema.js';
import { WaitlistRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WaitlistRequestSelectSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    receivedOn: z.boolean().optional(),
    emailsSent: z.boolean().optional(),
}).strict();
export const WaitlistRequestCreateArgsSchema = z.object({
    select: WaitlistRequestSelectSchema.optional(),
    data: z.union([WaitlistRequestCreateInputSchema, WaitlistRequestUncheckedCreateInputSchema]),
}).strict();
export default WaitlistRequestCreateArgsSchema;
