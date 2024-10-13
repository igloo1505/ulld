import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { PracticeExamCountOutputTypeSelectSchema } from '../PracticeExamCountOutputTypeSelectSchema.js';
export const PracticeExamCountOutputTypeArgsSchema: z.ZodType<Prisma.PracticeExamCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PracticeExamCountOutputTypeSelectSchema).nullish(),
}).strict();
export default PracticeExamCountOutputTypeSelectSchema;