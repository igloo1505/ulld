import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from '../NullableDateTimeFieldUpdateOperationsInputSchema.js';
export const TimePeriodUpdateWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUpdateWithoutDietInput> = z.object({
  start: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();
export default TimePeriodUpdateWithoutDietInputSchema;