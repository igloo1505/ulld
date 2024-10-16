import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const TimePeriodUncheckedCreateWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUncheckedCreateWithoutDietInput> = z.object({
  id: z.number().int().optional(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();
export default TimePeriodUncheckedCreateWithoutDietInputSchema;