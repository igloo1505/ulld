import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.js
..//inputTypeSchemas/WaitlistRequestCreateInputSchema.js
..//inputTypeSchemas/WaitlistRequestUncheckedCreateInputSchema.js
..//inputTypeSchemas/WaitlistRequestUpdateInputSchema.js
..//inputTypeSchemas/WaitlistRequestUncheckedUpdateInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WaitlistRequestSelectSchema: z.ZodType<Prisma.WaitlistRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional(),
}).strict()
export const WaitlistRequestUpsertArgsSchema: z.ZodType<Prisma.WaitlistRequestUpsertArgs> = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereUniqueInputSchema,
  create: z.union([ WaitlistRequestCreateInputSchema,WaitlistRequestUncheckedCreateInputSchema ]),
  update: z.union([ WaitlistRequestUpdateInputSchema,WaitlistRequestUncheckedUpdateInputSchema ]),
}).strict() ;
export default WaitlistRequestUpsertArgsSchema;