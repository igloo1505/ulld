import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WaitlistRequestCreateInputSchema } from '../inputTypeSchemas/WaitlistRequestCreateInputSchema.js'
import { WaitlistRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedCreateInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WaitlistRequestSelectSchema: z.ZodType<Prisma.WaitlistRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional(),
}).strict()
export const WaitlistRequestCreateArgsSchema: z.ZodType<Prisma.WaitlistRequestCreateArgs> = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  data: z.union([ WaitlistRequestCreateInputSchema,WaitlistRequestUncheckedCreateInputSchema ]),
}).strict() ;
export default WaitlistRequestCreateArgsSchema;