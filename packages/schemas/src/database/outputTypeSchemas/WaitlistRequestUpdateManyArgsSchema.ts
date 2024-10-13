import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WaitlistRequestUpdateManyMutationInputSchema.js
..//inputTypeSchemas/WaitlistRequestUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/WaitlistRequestWhereInputSchema.js
export const WaitlistRequestUpdateManyArgsSchema: z.ZodType<Prisma.WaitlistRequestUpdateManyArgs> = z.object({
  data: z.union([ WaitlistRequestUpdateManyMutationInputSchema,WaitlistRequestUncheckedUpdateManyInputSchema ]),
  where: WaitlistRequestWhereInputSchema.optional(),
}).strict() ;
export default WaitlistRequestUpdateManyArgsSchema;