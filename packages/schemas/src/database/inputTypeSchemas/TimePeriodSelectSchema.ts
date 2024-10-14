import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietArgsSchema } from "../outputTypeSchemas/DietArgsSchema"

export const TimePeriodSelectSchema: z.ZodType<Prisma.TimePeriodSelect> = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(),z.lazy(() => DietArgsSchema)]).optional(),
}).strict()

export default TimePeriodSelectSchema;
