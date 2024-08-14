import { z } from 'zod';
import { TaskCategorySchema } from '../inputTypeSchemas/TaskCategorySchema'
import type { MdxNoteWithRelations } from './MdxNoteSchema'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema'
import type { TagWithRelations } from './TagSchema'
import type { TagPartialWithRelations } from './TagSchema'
import type { TopicWithRelations } from './TopicSchema'
import type { TopicPartialWithRelations } from './TopicSchema'
import type { SubjectWithRelations } from './SubjectSchema'
import type { SubjectPartialWithRelations } from './SubjectSchema'
import type { ToDoListWithRelations } from './ToDoListSchema'
import type { ToDoListPartialWithRelations } from './ToDoListSchema'
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema'
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema'
import { TagWithRelationsSchema } from './TagSchema'
import { TagPartialWithRelationsSchema } from './TagSchema'
import { TopicWithRelationsSchema } from './TopicSchema'
import { TopicPartialWithRelationsSchema } from './TopicSchema'
import { SubjectWithRelationsSchema } from './SubjectSchema'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema'
import { ToDoListWithRelationsSchema } from './ToDoListSchema'
import { ToDoListPartialWithRelationsSchema } from './ToDoListSchema'

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
})

export type ToDo = z.infer<typeof ToDoSchema>

/////////////////////////////////////////
// TO DO PARTIAL SCHEMA
/////////////////////////////////////////

export const ToDoPartialSchema = ToDoSchema.partial()

export type ToDoPartial = z.infer<typeof ToDoPartialSchema>

/////////////////////////////////////////
// TO DO RELATION SCHEMA
/////////////////////////////////////////

export type ToDoRelations = {
  associatedNotes: MdxNoteWithRelations[];
  tags: TagWithRelations[];
  topics: TopicWithRelations[];
  subjects: SubjectWithRelations[];
  parent?: ToDoWithRelations | null;
  child: ToDoWithRelations[];
  ToDoList?: ToDoListWithRelations | null;
};

export type ToDoWithRelations = z.infer<typeof ToDoSchema> & ToDoRelations

export const ToDoWithRelationsSchema: z.ZodType<ToDoWithRelations> = ToDoSchema.merge(z.object({
  associatedNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  topics: z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
  parent: z.lazy(() => ToDoWithRelationsSchema).nullable(),
  child: z.lazy(() => ToDoWithRelationsSchema).array(),
  ToDoList: z.lazy(() => ToDoListWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// TO DO PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ToDoPartialRelations = {
  associatedNotes?: MdxNotePartialWithRelations[];
  tags?: TagPartialWithRelations[];
  topics?: TopicPartialWithRelations[];
  subjects?: SubjectPartialWithRelations[];
  parent?: ToDoPartialWithRelations | null;
  child?: ToDoPartialWithRelations[];
  ToDoList?: ToDoListPartialWithRelations | null;
};

export type ToDoPartialWithRelations = z.infer<typeof ToDoPartialSchema> & ToDoPartialRelations

export const ToDoPartialWithRelationsSchema: z.ZodType<ToDoPartialWithRelations> = ToDoPartialSchema.merge(z.object({
  associatedNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  parent: z.lazy(() => ToDoPartialWithRelationsSchema).nullable(),
  child: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  ToDoList: z.lazy(() => ToDoListPartialWithRelationsSchema).nullable(),
})).partial()

export type ToDoWithPartialRelations = z.infer<typeof ToDoSchema> & ToDoPartialRelations

export const ToDoWithPartialRelationsSchema: z.ZodType<ToDoWithPartialRelations> = ToDoSchema.merge(z.object({
  associatedNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  parent: z.lazy(() => ToDoPartialWithRelationsSchema).nullable(),
  child: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  ToDoList: z.lazy(() => ToDoListPartialWithRelationsSchema).nullable(),
}).partial())

export default ToDoSchema;
