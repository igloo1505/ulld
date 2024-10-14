import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamSelectSchema } from '../inputTypeSchemas/PracticeExamSelectSchema';
import { PracticeExamIncludeSchema } from '../inputTypeSchemas/PracticeExamIncludeSchema';

export const PracticeExamArgsSchema: z.ZodType<Prisma.PracticeExamDefaultArgs> = z.object({
  select: z.lazy(() => PracticeExamSelectSchema).optional(),
  include: z.lazy(() => PracticeExamIncludeSchema).optional(),
}).strict();

export default PracticeExamArgsSchema;
