import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { MdxNoteOrderByRelationAggregateInputSchema } from './MdxNoteOrderByRelationAggregateInputSchema.js';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema.js';
import { TopicOrderByRelationAggregateInputSchema } from './TopicOrderByRelationAggregateInputSchema.js';
import { SubjectOrderByRelationAggregateInputSchema } from './SubjectOrderByRelationAggregateInputSchema.js';
import { ToDoOrderByRelationAggregateInputSchema } from './ToDoOrderByRelationAggregateInputSchema.js';
import { ToDoListOrderByWithRelationInputSchema } from './ToDoListOrderByWithRelationInputSchema.js';
import { ToDoOrderByRelevanceInputSchema } from './ToDoOrderByRelevanceInputSchema.js';
export const ToDoOrderByWithRelationInputSchema: z.ZodType<Prisma.ToDoOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  dueAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  details: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  toDoListId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completedOn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  associatedNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  parent: z.lazy(() => ToDoOrderByWithRelationInputSchema).optional(),
  child: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  ToDoList: z.lazy(() => ToDoListOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ToDoOrderByRelevanceInputSchema).optional()
}).strict();
export default ToDoOrderByWithRelationInputSchema;