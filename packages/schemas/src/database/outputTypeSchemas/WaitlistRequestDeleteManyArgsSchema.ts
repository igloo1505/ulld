import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema'

export const WaitlistRequestDeleteManyArgsSchema: z.ZodType<Prisma.WaitlistRequestDeleteManyArgs> = z.object({
  where: WaitlistRequestWhereInputSchema.optional(),
}).strict() ;

export default WaitlistRequestDeleteManyArgsSchema;
