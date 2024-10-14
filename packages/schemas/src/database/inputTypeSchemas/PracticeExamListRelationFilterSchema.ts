import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereInputSchema } from './PracticeExamWhereInputSchema';

export const PracticeExamListRelationFilterSchema: z.ZodType<Prisma.PracticeExamListRelationFilter> = z.object({
  every: z.lazy(() => PracticeExamWhereInputSchema).optional(),
  some: z.lazy(() => PracticeExamWhereInputSchema).optional(),
  none: z.lazy(() => PracticeExamWhereInputSchema).optional()
}).strict();

export default PracticeExamListRelationFilterSchema;
