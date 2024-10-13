import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const DailyFocusCreateInputSchema: z.ZodType<Prisma.DailyFocusCreateInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export default DailyFocusCreateInputSchema;