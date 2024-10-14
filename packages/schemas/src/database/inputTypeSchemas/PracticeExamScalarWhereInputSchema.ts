import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PracticeExamScalarWhereInputSchema: z.ZodType<Prisma.PracticeExamScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PracticeExamScalarWhereInputSchema),z.lazy(() => PracticeExamScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PracticeExamScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PracticeExamScalarWhereInputSchema),z.lazy(() => PracticeExamScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  correctCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inCorrectCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  timeLimitInSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  timeCompletedInSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PracticeExamScalarWhereInputSchema;
