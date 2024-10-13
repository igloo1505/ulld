import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WaitlistRequestCreateManyInputSchema.js
export const WaitlistRequestCreateManyArgsSchema: z.ZodType<Prisma.WaitlistRequestCreateManyArgs> = z.object({
  data: z.union([ WaitlistRequestCreateManyInputSchema,WaitlistRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default WaitlistRequestCreateManyArgsSchema;