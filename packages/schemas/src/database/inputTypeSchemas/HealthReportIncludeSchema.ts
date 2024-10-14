import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietArgsSchema } from "../outputTypeSchemas/DietArgsSchema"

export const HealthReportIncludeSchema: z.ZodType<Prisma.HealthReportInclude> = z.object({
  currentDiet: z.union([z.boolean(),z.lazy(() => DietArgsSchema)]).optional(),
}).strict()

export default HealthReportIncludeSchema;
