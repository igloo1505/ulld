import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WaitlistRequestUpdateInputSchema.js
..//inputTypeSchemas/WaitlistRequestUncheckedUpdateInputSchema.js
..//inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WaitlistRequestSelectSchema: z.ZodType<Prisma.WaitlistRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional(),
}).strict()
export const WaitlistRequestUpdateArgsSchema: z.ZodType<Prisma.WaitlistRequestUpdateArgs> = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  data: z.union([ WaitlistRequestUpdateInputSchema,WaitlistRequestUncheckedUpdateInputSchema ]),
  where: WaitlistRequestWhereUniqueInputSchema,
}).strict() ;
export default WaitlistRequestUpdateArgsSchema;