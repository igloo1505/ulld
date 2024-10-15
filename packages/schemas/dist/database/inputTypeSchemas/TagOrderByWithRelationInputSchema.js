import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { MdxNoteOrderByRelationAggregateInputSchema } from './MdxNoteOrderByRelationAggregateInputSchema.js';
import { BibEntryOrderByRelationAggregateInputSchema } from './BibEntryOrderByRelationAggregateInputSchema.js';
import { IpynbOrderByRelationAggregateInputSchema } from './IpynbOrderByRelationAggregateInputSchema.js';
import { QAPairOrderByRelationAggregateInputSchema } from './QAPairOrderByRelationAggregateInputSchema.js';
import { PracticeExamOrderByRelationAggregateInputSchema } from './PracticeExamOrderByRelationAggregateInputSchema.js';
import { EquationOrderByRelationAggregateInputSchema } from './EquationOrderByRelationAggregateInputSchema.js';
import { ToDoOrderByRelationAggregateInputSchema } from './ToDoOrderByRelationAggregateInputSchema.js';
import { KanbanOrderByWithRelationInputSchema } from './KanbanOrderByWithRelationInputSchema.js';
import { ToDoListOrderByRelationAggregateInputSchema } from './ToDoListOrderByRelationAggregateInputSchema.js';
import { TagOrderByRelevanceInputSchema } from './TagOrderByRelevanceInputSchema.js';
export const TagOrderByWithRelationInputSchema = z.object({
    value: z.lazy(() => SortOrderSchema).optional(),
    kanbanId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    lastAccess: z.lazy(() => SortOrderSchema).optional(),
    MdxNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
    bibEntries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
    QAPair: z.lazy(() => QAPairOrderByRelationAggregateInputSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamOrderByRelationAggregateInputSchema).optional(),
    equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional(),
    toDo: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
    Kanban: z.lazy(() => KanbanOrderByWithRelationInputSchema).optional(),
    todoList: z.lazy(() => ToDoListOrderByRelationAggregateInputSchema).optional(),
    _relevance: z.lazy(() => TagOrderByRelevanceInputSchema).optional()
}).strict();
export default TagOrderByWithRelationInputSchema;
