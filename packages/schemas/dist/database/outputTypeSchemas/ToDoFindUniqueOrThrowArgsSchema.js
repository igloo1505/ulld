import { z } from 'zod';
import { ToDoIncludeSchema } from '../inputTypeSchemas/ToDoIncludeSchema.js';
import { ToDoWhereUniqueInputSchema } from '../inputTypeSchemas/ToDoWhereUniqueInputSchema.js';
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema";
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema";
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema";
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema";
import { ToDoArgsSchema } from "../outputTypeSchemas/ToDoArgsSchema";
import { ToDoFindManyArgsSchema } from "../outputTypeSchemas/ToDoFindManyArgsSchema";
import { ToDoListArgsSchema } from "../outputTypeSchemas/ToDoListArgsSchema";
import { ToDoCountOutputTypeArgsSchema } from "../outputTypeSchemas/ToDoCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ToDoSelectSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    task: z.boolean().optional(),
    dueAt: z.boolean().optional(),
    details: z.boolean().optional(),
    parentId: z.boolean().optional(),
    category: z.boolean().optional(),
    bookmarked: z.boolean().optional(),
    status: z.boolean().optional(),
    priority: z.boolean().optional(),
    toDoListId: z.boolean().optional(),
    completedOn: z.boolean().optional(),
    associatedNotes: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
    tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
    topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
    subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
    parent: z.union([z.boolean(), z.lazy(() => ToDoArgsSchema)]).optional(),
    child: z.union([z.boolean(), z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
    ToDoList: z.union([z.boolean(), z.lazy(() => ToDoListArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ToDoCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const ToDoFindUniqueOrThrowArgsSchema = z.object({
    select: ToDoSelectSchema.optional(),
    include: ToDoIncludeSchema.optional(),
    where: ToDoWhereUniqueInputSchema,
}).strict();
export default ToDoFindUniqueOrThrowArgsSchema;
