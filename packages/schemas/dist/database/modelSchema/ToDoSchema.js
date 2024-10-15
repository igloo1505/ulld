import { z } from 'zod';
import { TaskCategorySchema } from '../inputTypeSchemas/TaskCategorySchema.js';
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js';
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js';
import { TagWithRelationsSchema } from './TagSchema.js';
import { TagPartialWithRelationsSchema } from './TagSchema.js';
import { TopicWithRelationsSchema } from './TopicSchema.js';
import { TopicPartialWithRelationsSchema } from './TopicSchema.js';
import { SubjectWithRelationsSchema } from './SubjectSchema.js';
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js';
import { ToDoListWithRelationsSchema } from './ToDoListSchema.js';
import { ToDoListPartialWithRelationsSchema } from './ToDoListSchema.js';
/////////////////////////////////////////
// TO DO SCHEMA
/////////////////////////////////////////
export const ToDoSchema = z.object({
    category: TaskCategorySchema.nullable(),
    id: z.number().int(),
    createdAt: z.coerce.date(),
    task: z.string(),
    dueAt: z.coerce.date().nullable(),
    details: z.string().nullable(),
    parentId: z.number().int().nullable(),
    bookmarked: z.boolean(),
    status: z.string(),
    priority: z.number().int(),
    toDoListId: z.number().int().nullable(),
    completedOn: z.coerce.date().nullable(),
});
/////////////////////////////////////////
// TO DO PARTIAL SCHEMA
/////////////////////////////////////////
export const ToDoPartialSchema = ToDoSchema.partial();
export const ToDoWithRelationsSchema = ToDoSchema.merge(z.object({
    associatedNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
    tags: z.lazy(() => TagWithRelationsSchema).array(),
    topics: z.lazy(() => TopicWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
    parent: z.lazy(() => ToDoWithRelationsSchema).nullable(),
    child: z.lazy(() => ToDoWithRelationsSchema).array(),
    ToDoList: z.lazy(() => ToDoListWithRelationsSchema).nullable(),
}));
export const ToDoPartialWithRelationsSchema = ToDoPartialSchema.merge(z.object({
    associatedNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    parent: z.lazy(() => ToDoPartialWithRelationsSchema).nullable(),
    child: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    ToDoList: z.lazy(() => ToDoListPartialWithRelationsSchema).nullable(),
})).partial();
export const ToDoWithPartialRelationsSchema = ToDoSchema.merge(z.object({
    associatedNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    parent: z.lazy(() => ToDoPartialWithRelationsSchema).nullable(),
    child: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    ToDoList: z.lazy(() => ToDoListPartialWithRelationsSchema).nullable(),
}).partial());
export default ToDoSchema;
