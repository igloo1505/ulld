import { z } from 'zod';
import { WaitlistRequestUpdateInputSchema } from '../inputTypeSchemas/WaitlistRequestUpdateInputSchema.js';
import { WaitlistRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedUpdateInputSchema.js';
import { WaitlistRequestWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WaitlistRequestSelectSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    receivedOn: z.boolean().optional(),
    emailsSent: z.boolean().optional(),
}).strict();
export const WaitlistRequestUpdateArgsSchema = z.object({
    select: WaitlistRequestSelectSchema.optional(),
    data: z.union([WaitlistRequestUpdateInputSchema, WaitlistRequestUncheckedUpdateInputSchema]),
    where: WaitlistRequestWhereUniqueInputSchema,
}).strict();
export default WaitlistRequestUpdateArgsSchema;
