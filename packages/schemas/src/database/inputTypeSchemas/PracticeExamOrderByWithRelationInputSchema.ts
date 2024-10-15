import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { TopicOrderByRelationAggregateInputSchema } from './TopicOrderByRelationAggregateInputSchema.js';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema.js';
import { SubjectOrderByRelationAggregateInputSchema } from './SubjectOrderByRelationAggregateInputSchema.js';
import { QAPairOrderByRelationAggregateInputSchema } from './QAPairOrderByRelationAggregateInputSchema.js';
export const PracticeExamOrderByWithRelationInputSchema: z.ZodType<Prisma.PracticeExamOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  questions: z.lazy(() => QAPairOrderByRelationAggregateInputSchema).optional()
}).strict();
export default PracticeExamOrderByWithRelationInputSchema;