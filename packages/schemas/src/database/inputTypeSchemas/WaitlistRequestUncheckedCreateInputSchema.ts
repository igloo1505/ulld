import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const WaitlistRequestUncheckedCreateInputSchema: z.ZodType<Prisma.WaitlistRequestUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  receivedOn: z.coerce.date().optional(),
  emailsSent: z.number().int().optional()
}).strict();
export default WaitlistRequestUncheckedCreateInputSchema;