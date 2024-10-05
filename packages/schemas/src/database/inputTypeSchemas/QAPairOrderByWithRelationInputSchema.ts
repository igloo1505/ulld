import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema';
import { TopicOrderByRelationAggregateInputSchema } from './TopicOrderByRelationAggregateInputSchema';
import { SubjectOrderByRelationAggregateInputSchema } from './SubjectOrderByRelationAggregateInputSchema';
import { PracticeExamOrderByRelationAggregateInputSchema } from './PracticeExamOrderByRelationAggregateInputSchema';
import { QAPairOrderByRelevanceInputSchema } from './QAPairOrderByRelevanceInputSchema';

export const QAPairOrderByWithRelationInputSchema: z.ZodType<Prisma.QAPairOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  secondaryLabel: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => QAPairOrderByRelevanceInputSchema).optional()
}).strict();

export default QAPairOrderByWithRelationInputSchema;
