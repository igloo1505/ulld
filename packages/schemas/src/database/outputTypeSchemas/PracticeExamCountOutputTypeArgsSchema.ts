import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamCountOutputTypeSelectSchema } from './PracticeExamCountOutputTypeSelectSchema';

export const PracticeExamCountOutputTypeArgsSchema: z.ZodType<Prisma.PracticeExamCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PracticeExamCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PracticeExamCountOutputTypeSelectSchema;
