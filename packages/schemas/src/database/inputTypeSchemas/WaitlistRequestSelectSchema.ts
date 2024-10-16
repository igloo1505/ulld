import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const WaitlistRequestSelectSchema: z.ZodType<Prisma.WaitlistRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional(),
}).strict()
export default WaitlistRequestSelectSchema;