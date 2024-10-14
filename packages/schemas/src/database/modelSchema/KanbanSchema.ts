import { z } from 'zod';
import type { KanBanListWithRelations } from './KanBanListSchema.js'
import type { KanBanListPartialWithRelations } from './KanBanListSchema.js'
import type { TagWithRelations } from './TagSchema.js'
import type { TagPartialWithRelations } from './TagSchema.js'
import type { SubjectWithRelations } from './SubjectSchema.js'
import type { SubjectPartialWithRelations } from './SubjectSchema.js'
import type { TopicWithRelations } from './TopicSchema.js'
import type { TopicPartialWithRelations } from './TopicSchema.js'
import { KanBanListWithRelationsSchema } from './KanBanListSchema.js'
import { KanBanListPartialWithRelationsSchema } from './KanBanListSchema.js'
import { TagWithRelationsSchema } from './TagSchema.js'
import { TagPartialWithRelationsSchema } from './TagSchema.js'
import { SubjectWithRelationsSchema } from './SubjectSchema.js'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js'
import { TopicWithRelationsSchema } from './TopicSchema.js'
import { TopicPartialWithRelationsSchema } from './TopicSchema.js'
/////////////////////////////////////////
// KANBAN SCHEMA
/////////////////////////////////////////
export const KanbanSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  createdAt: z.coerce.date(),
  lastUpdate: z.coerce.date(),
})
export type Kanban = z.infer<typeof KanbanSchema>
/////////////////////////////////////////
// KANBAN PARTIAL SCHEMA
/////////////////////////////////////////
export const KanbanPartialSchema = KanbanSchema.partial()
export type KanbanPartial = z.infer<typeof KanbanPartialSchema>
/////////////////////////////////////////
// KANBAN RELATION SCHEMA
/////////////////////////////////////////
export type KanbanRelations = {
  lists: KanBanListWithRelations[];
  tags: TagWithRelations[];
  subjects: SubjectWithRelations[];
  topics: TopicWithRelations[];
};
export type KanbanWithRelations = z.infer<typeof KanbanSchema> & KanbanRelations
export const KanbanWithRelationsSchema: z.ZodType<KanbanWithRelations> = KanbanSchema.merge(z.object({
  lists: z.lazy(() => KanBanListWithRelationsSchema).array(),
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
  topics: z.lazy(() => TopicWithRelationsSchema).array(),
}))
/////////////////////////////////////////
// KANBAN PARTIAL RELATION SCHEMA
/////////////////////////////////////////
export type KanbanPartialRelations = {
  lists?: KanBanListPartialWithRelations[];
  tags?: TagPartialWithRelations[];
  subjects?: SubjectPartialWithRelations[];
  topics?: TopicPartialWithRelations[];
};
export type KanbanPartialWithRelations = z.infer<typeof KanbanPartialSchema> & KanbanPartialRelations
export const KanbanPartialWithRelationsSchema: z.ZodType<KanbanPartialWithRelations> = KanbanPartialSchema.merge(z.object({
  lists: z.lazy(() => KanBanListPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
})).partial()
export type KanbanWithPartialRelations = z.infer<typeof KanbanSchema> & KanbanPartialRelations
export const KanbanWithPartialRelationsSchema: z.ZodType<KanbanWithPartialRelations> = KanbanSchema.merge(z.object({
  lists: z.lazy(() => KanBanListPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
}).partial())
export default KanbanSchema;