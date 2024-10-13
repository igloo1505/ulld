import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WaitlistRequestSelectSchema: z.ZodType<Prisma.WaitlistRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional(),
}).strict()
export const WaitlistRequestFindUniqueArgsSchema: z.ZodType<Prisma.WaitlistRequestFindUniqueArgs> = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereUniqueInputSchema,
}).strict() ;
export default WaitlistRequestFindUniqueArgsSchema;