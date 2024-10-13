import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const TimePeriodCreateWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodCreateWithoutDietInput> = z.object({
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();
export default TimePeriodCreateWithoutDietInputSchema;