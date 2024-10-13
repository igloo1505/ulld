import { z } from 'zod';
import type { KanBanCardWithRelations } from '../KanBanCardSchema.js'
import type { KanBanCardPartialWithRelations } from '../KanBanCardSchema.js'
import type { KanbanWithRelations } from '../KanbanSchema.js'
import type { KanbanPartialWithRelations } from '../KanbanSchema.js'
import { KanBanCardWithRelationsSchema } from '../KanBanCardSchema.js'
import { KanBanCardPartialWithRelationsSchema } from '../KanBanCardSchema.js'
import { KanbanWithRelationsSchema } from '../KanbanSchema.js'
import { KanbanPartialWithRelationsSchema } from '../KanbanSchema.js'
/////////////////////////////////////////
// KAN BAN LIST SCHEMA
/////////////////////////////////////////
export const KanBanListSchema = z.object({
  id: z.number().int(),
  indexWithinBoard: z.number().int(),
  title: z.string().nullable(),
  boardId: z.number().int().nullable(),
})
export type KanBanList = z.infer<typeof KanBanListSchema>
/////////////////////////////////////////
// KAN BAN LIST PARTIAL SCHEMA
/////////////////////////////////////////
export const KanBanListPartialSchema = KanBanListSchema.partial()
export type KanBanListPartial = z.infer<typeof KanBanListPartialSchema>
/////////////////////////////////////////
// KAN BAN LIST RELATION SCHEMA
/////////////////////////////////////////
export type KanBanListRelations = {
  cards: KanBanCardWithRelations[];
  Kanban?: KanbanWithRelations | null;
};
export type KanBanListWithRelations = z.infer<typeof KanBanListSchema> & KanBanListRelations
export const KanBanListWithRelationsSchema: z.ZodType<KanBanListWithRelations> = KanBanListSchema.merge(z.object({
  cards: z.lazy(() => KanBanCardWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanWithRelationsSchema).nullable(),
}))
/////////////////////////////////////////
// KAN BAN LIST PARTIAL RELATION SCHEMA
/////////////////////////////////////////
export type KanBanListPartialRelations = {
  cards?: KanBanCardPartialWithRelations[];
  Kanban?: KanbanPartialWithRelations | null;
};
export type KanBanListPartialWithRelations = z.infer<typeof KanBanListPartialSchema> & KanBanListPartialRelations
export const KanBanListPartialWithRelationsSchema: z.ZodType<KanBanListPartialWithRelations> = KanBanListPartialSchema.merge(z.object({
  cards: z.lazy(() => KanBanCardPartialWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
})).partial()
export type KanBanListWithPartialRelations = z.infer<typeof KanBanListSchema> & KanBanListPartialRelations
export const KanBanListWithPartialRelationsSchema: z.ZodType<KanBanListWithPartialRelations> = KanBanListSchema.merge(z.object({
  cards: z.lazy(() => KanBanCardPartialWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
}).partial())
export default KanBanListSchema;