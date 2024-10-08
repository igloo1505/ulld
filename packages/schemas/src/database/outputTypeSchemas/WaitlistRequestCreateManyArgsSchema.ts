import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistRequestCreateManyInputSchema } from '../inputTypeSchemas/WaitlistRequestCreateManyInputSchema'

export const WaitlistRequestCreateManyArgsSchema: z.ZodType<Prisma.WaitlistRequestCreateManyArgs> = z.object({
  data: z.union([ WaitlistRequestCreateManyInputSchema,WaitlistRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WaitlistRequestCreateManyArgsSchema;
