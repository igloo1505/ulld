import { z } from 'zod';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema.js';
export const WaitlistRequestDeleteManyArgsSchema = z.object({
    where: WaitlistRequestWhereInputSchema.optional(),
}).strict();
export default WaitlistRequestDeleteManyArgsSchema;
