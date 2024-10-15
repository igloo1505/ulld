import { z } from 'zod';
import { WaitlistRequestWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WaitlistRequestSelectSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    receivedOn: z.boolean().optional(),
    emailsSent: z.boolean().optional(),
}).strict();
export const WaitlistRequestFindUniqueOrThrowArgsSchema = z.object({
    select: WaitlistRequestSelectSchema.optional(),
    where: WaitlistRequestWhereUniqueInputSchema,
}).strict();
export default WaitlistRequestFindUniqueOrThrowArgsSchema;
