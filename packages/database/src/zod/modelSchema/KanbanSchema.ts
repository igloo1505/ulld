import { z } from 'zod';
import type { KanBanListWithRelations } from './KanBanListSchema'
import type { KanBanListPartialWithRelations } from './KanBanListSchema'
import type { TagWithRelations } from './TagSchema'
import type { TagPartialWithRelations } from './TagSchema'
import type { SubjectWithRelations } from './SubjectSchema'
import type { SubjectPartialWithRelations } from './SubjectSchema'
import type { TopicWithRelations } from './TopicSchema'
import type { TopicPartialWithRelations } from './TopicSchema'
import { KanBanListWithRelationsSchema } from './KanBanListSchema'
import { KanBanListPartialWithRelationsSchema } from './KanBanListSchema'
import { TagWithRelationsSchema } from './TagSchema'
import { TagPartialWithRelationsSchema } from './TagSchema'
import { SubjectWithRelationsSchema } from './SubjectSchema'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema'
import { TopicWithRelationsSchema } from './TopicSchema'
import { TopicPartialWithRelationsSchema } from './TopicSchema'

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
