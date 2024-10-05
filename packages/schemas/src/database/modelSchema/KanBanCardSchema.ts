import { z } from 'zod';
import type { KanBanListWithRelations } from './KanBanListSchema'
import type { KanBanListPartialWithRelations } from './KanBanListSchema'
import { KanBanListWithRelationsSchema } from './KanBanListSchema'
import { KanBanListPartialWithRelationsSchema } from './KanBanListSchema'

/////////////////////////////////////////
// KAN BAN CARD SCHEMA
/////////////////////////////////////////

export const KanBanCardSchema = z.object({
  id: z.number().int(),
  listId: z.number().int().nullable(),
  indexWithinList: z.number().int(),
  label: z.string().nullable(),
  details: z.string().nullable(),
})

export type KanBanCard = z.infer<typeof KanBanCardSchema>

/////////////////////////////////////////
// KAN BAN CARD PARTIAL SCHEMA
/////////////////////////////////////////

export const KanBanCardPartialSchema = KanBanCardSchema.partial()

export type KanBanCardPartial = z.infer<typeof KanBanCardPartialSchema>

/////////////////////////////////////////
// KAN BAN CARD RELATION SCHEMA
/////////////////////////////////////////

export type KanBanCardRelations = {
  KanBanList?: KanBanListWithRelations | null;
};

export type KanBanCardWithRelations = z.infer<typeof KanBanCardSchema> & KanBanCardRelations

export const KanBanCardWithRelationsSchema: z.ZodType<KanBanCardWithRelations> = KanBanCardSchema.merge(z.object({
  KanBanList: z.lazy(() => KanBanListWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// KAN BAN CARD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type KanBanCardPartialRelations = {
  KanBanList?: KanBanListPartialWithRelations | null;
};

export type KanBanCardPartialWithRelations = z.infer<typeof KanBanCardPartialSchema> & KanBanCardPartialRelations

export const KanBanCardPartialWithRelationsSchema: z.ZodType<KanBanCardPartialWithRelations> = KanBanCardPartialSchema.merge(z.object({
  KanBanList: z.lazy(() => KanBanListPartialWithRelationsSchema).nullable(),
})).partial()

export type KanBanCardWithPartialRelations = z.infer<typeof KanBanCardSchema> & KanBanCardPartialRelations

export const KanBanCardWithPartialRelationsSchema: z.ZodType<KanBanCardWithPartialRelations> = KanBanCardSchema.merge(z.object({
  KanBanList: z.lazy(() => KanBanListPartialWithRelationsSchema).nullable(),
}).partial())

export default KanBanCardSchema;
