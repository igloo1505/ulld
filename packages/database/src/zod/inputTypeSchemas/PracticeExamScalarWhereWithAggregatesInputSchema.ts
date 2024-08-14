import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const PracticeExamScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PracticeExamScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema),z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema),z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  correctCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inCorrectCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  timeLimitInSeconds: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  timeCompletedInSeconds: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PracticeExamScalarWhereWithAggregatesInputSchema;
