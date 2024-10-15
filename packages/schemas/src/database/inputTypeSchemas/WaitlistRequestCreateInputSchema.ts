import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const WaitlistRequestCreateInputSchema: z.ZodType<Prisma.WaitlistRequestCreateInput> = z.object({
  email: z.string(),
  receivedOn: z.coerce.date().optional(),
  emailsSent: z.number().int().optional()
}).strict();
export default WaitlistRequestCreateInputSchema;