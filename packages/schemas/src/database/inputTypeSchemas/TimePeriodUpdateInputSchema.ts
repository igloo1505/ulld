import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DietUpdateOneWithoutPeriodsFollowedNestedInputSchema } from './DietUpdateOneWithoutPeriodsFollowedNestedInputSchema';

export const TimePeriodUpdateInputSchema: z.ZodType<Prisma.TimePeriodUpdateInput> = z.object({
  start: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diet: z.lazy(() => DietUpdateOneWithoutPeriodsFollowedNestedInputSchema).optional()
}).strict();

export default TimePeriodUpdateInputSchema;
