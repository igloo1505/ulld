import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/WaitlistRequestUpdateManyMutationInputSchema'
import { WaitlistRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedUpdateManyInputSchema'
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema'

export const WaitlistRequestUpdateManyArgsSchema: z.ZodType<Prisma.WaitlistRequestUpdateManyArgs> = z.object({
  data: z.union([ WaitlistRequestUpdateManyMutationInputSchema,WaitlistRequestUncheckedUpdateManyInputSchema ]),
  where: WaitlistRequestWhereInputSchema.optional(),
}).strict() ;

export default WaitlistRequestUpdateManyArgsSchema;
