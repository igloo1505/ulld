import { z } from 'zod';
import { KanBanListWithRelationsSchema } from './KanBanListSchema.js';
import { KanBanListPartialWithRelationsSchema } from './KanBanListSchema.js';
/////////////////////////////////////////
// KAN BAN CARD SCHEMA
/////////////////////////////////////////
export const KanBanCardSchema = z.object({
    id: z.number().int(),
    listId: z.number().int().nullable(),
    indexWithinList: z.number().int(),
    label: z.string().nullable(),
    details: z.string().nullable(),
});
/////////////////////////////////////////
// KAN BAN CARD PARTIAL SCHEMA
/////////////////////////////////////////
export const KanBanCardPartialSchema = KanBanCardSchema.partial();
export const KanBanCardWithRelationsSchema = KanBanCardSchema.merge(z.object({
    KanBanList: z.lazy(() => KanBanListWithRelationsSchema).nullable(),
}));
export const KanBanCardPartialWithRelationsSchema = KanBanCardPartialSchema.merge(z.object({
    KanBanList: z.lazy(() => KanBanListPartialWithRelationsSchema).nullable(),
})).partial();
export const KanBanCardWithPartialRelationsSchema = KanBanCardSchema.merge(z.object({
    KanBanList: z.lazy(() => KanBanListPartialWithRelationsSchema).nullable(),
}).partial());
export default KanBanCardSchema;
