import { z } from 'zod';
import { WaitlistRequestWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.js';
import { WaitlistRequestCreateInputSchema } from '../inputTypeSchemas/WaitlistRequestCreateInputSchema.js';
import { WaitlistRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedCreateInputSchema.js';
import { WaitlistRequestUpdateInputSchema } from '../inputTypeSchemas/WaitlistRequestUpdateInputSchema.js';
import { WaitlistRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedUpdateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WaitlistRequestSelectSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    receivedOn: z.boolean().optional(),
    emailsSent: z.boolean().optional(),
}).strict();
export const WaitlistRequestUpsertArgsSchema = z.object({
    select: WaitlistRequestSelectSchema.optional(),
    where: WaitlistRequestWhereUniqueInputSchema,
    create: z.union([WaitlistRequestCreateInputSchema, WaitlistRequestUncheckedCreateInputSchema]),
    update: z.union([WaitlistRequestUpdateInputSchema, WaitlistRequestUncheckedUpdateInputSchema]),
}).strict();
export default WaitlistRequestUpsertArgsSchema;
