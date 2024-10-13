import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const DailyFocusUncheckedCreateInputSchema: z.ZodType<Prisma.DailyFocusUncheckedCreateInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export default DailyFocusUncheckedCreateInputSchema;