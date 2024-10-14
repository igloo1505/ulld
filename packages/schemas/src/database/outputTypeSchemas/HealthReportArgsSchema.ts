import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HealthReportSelectSchema } from '../inputTypeSchemas/HealthReportSelectSchema';
import { HealthReportIncludeSchema } from '../inputTypeSchemas/HealthReportIncludeSchema';

export const HealthReportArgsSchema: z.ZodType<Prisma.HealthReportDefaultArgs> = z.object({
  select: z.lazy(() => HealthReportSelectSchema).optional(),
  include: z.lazy(() => HealthReportIncludeSchema).optional(),
}).strict();

export default HealthReportArgsSchema;
