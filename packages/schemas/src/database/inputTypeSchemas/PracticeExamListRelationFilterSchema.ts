import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamWhereInputSchema } from './PracticeExamWhereInputSchema.js';
export const PracticeExamListRelationFilterSchema: z.ZodType<Prisma.PracticeExamListRelationFilter> = z.object({
  every: z.lazy(() => PracticeExamWhereInputSchema).optional(),
  some: z.lazy(() => PracticeExamWhereInputSchema).optional(),
  none: z.lazy(() => PracticeExamWhereInputSchema).optional()
}).strict();
export default PracticeExamListRelationFilterSchema;