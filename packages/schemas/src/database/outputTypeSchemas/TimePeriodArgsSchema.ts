import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TimePeriodSelectSchema } from '../inputTypeSchemas/TimePeriodSelectSchema.js';
import { TimePeriodIncludeSchema } from '../inputTypeSchemas/TimePeriodIncludeSchema.js';
export const TimePeriodArgsSchema: z.ZodType<Prisma.TimePeriodDefaultArgs> = z.object({
  select: z.lazy(() => TimePeriodSelectSchema).optional(),
  include: z.lazy(() => TimePeriodIncludeSchema).optional(),
}).strict();
export default TimePeriodArgsSchema;