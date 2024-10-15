import { z } from 'zod';
import { WaitlistRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/WaitlistRequestUpdateManyMutationInputSchema.js';
import { WaitlistRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedUpdateManyInputSchema.js';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema.js';
export const WaitlistRequestUpdateManyArgsSchema = z.object({
    data: z.union([WaitlistRequestUpdateManyMutationInputSchema, WaitlistRequestUncheckedUpdateManyInputSchema]),
    where: WaitlistRequestWhereInputSchema.optional(),
}).strict();
export default WaitlistRequestUpdateManyArgsSchema;
