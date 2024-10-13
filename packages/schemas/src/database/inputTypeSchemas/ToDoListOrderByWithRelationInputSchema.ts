import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { ToDoOrderByRelationAggregateInputSchema } from '../ToDoOrderByRelationAggregateInputSchema.js';
import { TagOrderByRelationAggregateInputSchema } from '../TagOrderByRelationAggregateInputSchema.js';
import { TopicOrderByRelationAggregateInputSchema } from '../TopicOrderByRelationAggregateInputSchema.js';
import { SubjectOrderByRelationAggregateInputSchema } from '../SubjectOrderByRelationAggregateInputSchema.js';
import { ToDoListOrderByRelevanceInputSchema } from '../ToDoListOrderByRelevanceInputSchema.js';
export const ToDoListOrderByWithRelationInputSchema: z.ZodType<Prisma.ToDoListOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  tasks: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => ToDoListOrderByRelevanceInputSchema).optional()
}).strict();
export default ToDoListOrderByWithRelationInputSchema;