import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TimePeriodSelectSchema } from '../inputTypeSchemas/TimePeriodSelectSchema';
import { TimePeriodIncludeSchema } from '../inputTypeSchemas/TimePeriodIncludeSchema';

export const TimePeriodArgsSchema: z.ZodType<Prisma.TimePeriodDefaultArgs> = z.object({
  select: z.lazy(() => TimePeriodSelectSchema).optional(),
  include: z.lazy(() => TimePeriodIncludeSchema).optional(),
}).strict();

export default TimePeriodArgsSchema;
