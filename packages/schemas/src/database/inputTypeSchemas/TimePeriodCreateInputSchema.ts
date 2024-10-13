import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietCreateNestedOneWithoutPeriodsFollowedInputSchema } from '../DietCreateNestedOneWithoutPeriodsFollowedInputSchema.js';
export const TimePeriodCreateInputSchema: z.ZodType<Prisma.TimePeriodCreateInput> = z.object({
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable(),
  Diet: z.lazy(() => DietCreateNestedOneWithoutPeriodsFollowedInputSchema).optional()
}).strict();
export default TimePeriodCreateInputSchema;