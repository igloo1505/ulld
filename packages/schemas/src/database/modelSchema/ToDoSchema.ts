import { z } from 'zod';
..//inputTypeSchemas/TaskCategorySchema.js
import type { MdxNoteWithRelations } from '../MdxNoteSchema.js'
import type { MdxNotePartialWithRelations } from '../MdxNoteSchema.js'
import type { TagWithRelations } from '../TagSchema.js'
import type { TagPartialWithRelations } from '../TagSchema.js'
import type { TopicWithRelations } from '../TopicSchema.js'
import type { TopicPartialWithRelations } from '../TopicSchema.js'
import type { SubjectWithRelations } from '../SubjectSchema.js'
import type { SubjectPartialWithRelations } from '../SubjectSchema.js'
import type { ToDoListWithRelations } from '../ToDoListSchema.js'
import type { ToDoListPartialWithRelations } from '../ToDoListSchema.js'
import { MdxNoteWithRelationsSchema } from '../MdxNoteSchema.js'
import { MdxNotePartialWithRelationsSchema } from '../MdxNoteSchema.js'
import { TagWithRelationsSchema } from '../TagSchema.js'
import { TagPartialWithRelationsSchema } from '../TagSchema.js'
import { TopicWithRelationsSchema } from '../TopicSchema.js'
import { TopicPartialWithRelationsSchema } from '../TopicSchema.js'
import { SubjectWithRelationsSchema } from '../SubjectSchema.js'
import { SubjectPartialWithRelationsSchema } from '../SubjectSchema.js'
import { ToDoListWithRelationsSchema } from '../ToDoListSchema.js'
import { ToDoListPartialWithRelationsSchema } from '../ToDoListSchema.js'
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