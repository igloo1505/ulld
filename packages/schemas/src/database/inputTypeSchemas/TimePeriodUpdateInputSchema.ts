import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema.js';
import { DietUpdateOneWithoutPeriodsFollowedNestedInputSchema } from './DietUpdateOneWithoutPeriodsFollowedNestedInputSchema.js';
export const TimePeriodUpdateInputSchema: z.ZodType<Prisma.TimePeriodUpdateInput> = z.object({
  start: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diet: z.lazy(() => DietUpdateOneWithoutPeriodsFollowedNestedInputSchema).optional()
}).strict();
export default TimePeriodUpdateInputSchema;