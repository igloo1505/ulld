import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietArgsSchema } from "../outputTypeSchemas/DietArgsSchema"

export const TimePeriodIncludeSchema: z.ZodType<Prisma.TimePeriodInclude> = z.object({
  Diet: z.union([z.boolean(),z.lazy(() => DietArgsSchema)]).optional(),
}).strict()

export default TimePeriodIncludeSchema;
