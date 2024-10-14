import { z } from 'zod';
import type { ToDoWithRelations } from './ToDoSchema.js'
import type { ToDoPartialWithRelations } from './ToDoSchema.js'
import type { TagWithRelations } from './TagSchema.js'
import type { TagPartialWithRelations } from './TagSchema.js'
import type { TopicWithRelations } from './TopicSchema.js'
import type { TopicPartialWithRelations } from './TopicSchema.js'
import type { SubjectWithRelations } from './SubjectSchema.js'
import type { SubjectPartialWithRelations } from './SubjectSchema.js'
import { ToDoWithRelationsSchema } from './ToDoSchema.js'
import { ToDoPartialWithRelationsSchema } from './ToDoSchema.js'
import { TagWithRelationsSchema } from './TagSchema.js'
import { TagPartialWithRelationsSchema } from './TagSchema.js'
import { TopicWithRelationsSchema } from './TopicSchema.js'
import { TopicPartialWithRelationsSchema } from './TopicSchema.js'
import { SubjectWithRelationsSchema } from './SubjectSchema.js'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js'
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