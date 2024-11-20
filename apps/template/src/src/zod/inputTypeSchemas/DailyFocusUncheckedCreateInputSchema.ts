import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DailyFocusUncheckedCreateInputSchema: z.ZodType<Prisma.DailyFocusUncheckedCreateInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default DailyFocusUncheckedCreateInputSchema;
