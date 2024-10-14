import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DailyFocusSelectSchema: z.ZodType<Prisma.DailyFocusSelect> = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export default DailyFocusSelectSchema;
