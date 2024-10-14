import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WaitlistRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/WaitlistRequestUpdateManyMutationInputSchema.js'
import { WaitlistRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedUpdateManyInputSchema.js'
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema.js'
export const WaitlistRequestUpdateManyArgsSchema: z.ZodType<Prisma.WaitlistRequestUpdateManyArgs> = z.object({
  data: z.union([ WaitlistRequestUpdateManyMutationInputSchema,WaitlistRequestUncheckedUpdateManyInputSchema ]),
  where: WaitlistRequestWhereInputSchema.optional(),
}).strict() ;
export default WaitlistRequestUpdateManyArgsSchema;