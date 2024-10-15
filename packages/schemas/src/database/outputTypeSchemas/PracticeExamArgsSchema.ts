import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { PracticeExamSelectSchema } from '../inputTypeSchemas/PracticeExamSelectSchema.js';
import { PracticeExamIncludeSchema } from '../inputTypeSchemas/PracticeExamIncludeSchema.js';
export const PracticeExamArgsSchema: z.ZodType<Prisma.PracticeExamDefaultArgs> = z.object({
  select: z.lazy(() => PracticeExamSelectSchema).optional(),
  include: z.lazy(() => PracticeExamIncludeSchema).optional(),
}).strict();
export default PracticeExamArgsSchema;