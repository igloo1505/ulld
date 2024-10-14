import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TimePeriodUncheckedCreateInputSchema: z.ZodType<Prisma.TimePeriodUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable(),
  dietId: z.string().optional().nullable()
}).strict();

export default TimePeriodUncheckedCreateInputSchema;
