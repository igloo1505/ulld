import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DailyFocusCreateManyInputSchema: z.ZodType<Prisma.DailyFocusCreateManyInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default DailyFocusCreateManyInputSchema;
