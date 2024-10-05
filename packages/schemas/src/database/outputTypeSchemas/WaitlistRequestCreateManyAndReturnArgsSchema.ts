import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistRequestCreateManyInputSchema } from '../inputTypeSchemas/WaitlistRequestCreateManyInputSchema'

export const WaitlistRequestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WaitlistRequestCreateManyAndReturnArgs> = z.object({
  data: z.union([ WaitlistRequestCreateManyInputSchema,WaitlistRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WaitlistRequestCreateManyAndReturnArgsSchema;
