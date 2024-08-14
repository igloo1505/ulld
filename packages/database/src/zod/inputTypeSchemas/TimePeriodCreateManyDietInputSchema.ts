import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TimePeriodCreateManyDietInputSchema: z.ZodType<Prisma.TimePeriodCreateManyDietInput> = z.object({
  id: z.number().int().optional(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();

export default TimePeriodCreateManyDietInputSchema;
