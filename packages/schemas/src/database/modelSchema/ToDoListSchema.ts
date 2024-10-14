import { z } from 'zod';
import type { ToDoWithRelations } from './ToDoSchema'
import type { ToDoPartialWithRelations } from './ToDoSchema'
import type { TagWithRelations } from './TagSchema'
import type { TagPartialWithRelations } from './TagSchema'
import type { TopicWithRelations } from './TopicSchema'
import type { TopicPartialWithRelations } from './TopicSchema'
import type { SubjectWithRelations } from './SubjectSchema'
import type { SubjectPartialWithRelations } from './SubjectSchema'
import { ToDoWithRelationsSchema } from './ToDoSchema'
import { ToDoPartialWithRelationsSchema } from './ToDoSchema'
import { TagWithRelationsSchema } from './TagSchema'
import { TagPartialWithRelationsSchema } from './TagSchema'
import { TopicWithRelationsSchema } from './TopicSchema'
import { TopicPartialWithRelationsSchema } from './TopicSchema'
import { SubjectWithRelationsSchema } from './SubjectSchema'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema'

/////////////////////////////////////////
// TO DO LIST SCHEMA
/////////////////////////////////////////

export const ToDoListSchema = z.object({
  id: z.number().int(),
  label: z.string(),
  createdAt: z.coerce.date(),
  lastUpdate: z.coerce.date(),
  lastAccess: z.coerce.date(),
})

export type ToDoList = z.infer<typeof ToDoListSchema>

/////////////////////////////////////////
// TO DO LIST PARTIAL SCHEMA
/////////////////////////////////////////

export const ToDoListPartialSchema = ToDoListSchema.partial()

export type ToDoListPartial = z.infer<typeof ToDoListPartialSchema>

/////////////////////////////////////////
// TO DO LIST RELATION SCHEMA
/////////////////////////////////////////

export type ToDoListRelations = {
  tasks: ToDoWithRelations[];
  tags: TagWithRelations[];
  topics: TopicWithRelations[];
  subjects: SubjectWithRelations[];
};

export type ToDoListWithRelations = z.infer<typeof ToDoListSchema> & ToDoListRelations

export const ToDoListWithRelationsSchema: z.ZodType<ToDoListWithRelations> = ToDoListSchema.merge(z.object({
  tasks: z.lazy(() => ToDoWithRelationsSchema).array(),
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  topics: z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TO DO LIST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ToDoListPartialRelations = {
  tasks?: ToDoPartialWithRelations[];
  tags?: TagPartialWithRelations[];
  topics?: TopicPartialWithRelations[];
  subjects?: SubjectPartialWithRelations[];
};

export type ToDoListPartialWithRelations = z.infer<typeof ToDoListPartialSchema> & ToDoListPartialRelations

export const ToDoListPartialWithRelationsSchema: z.ZodType<ToDoListPartialWithRelations> = ToDoListPartialSchema.merge(z.object({
  tasks: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
})).partial()

export type ToDoListWithPartialRelations = z.infer<typeof ToDoListSchema> & ToDoListPartialRelations

export const ToDoListWithPartialRelationsSchema: z.ZodType<ToDoListWithPartialRelations> = ToDoListSchema.merge(z.object({
  tasks: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
}).partial())

export default ToDoListSchema;
