import { z } from 'zod';
import { KanBanCardWithRelationsSchema } from './KanBanCardSchema.js';
import { KanBanCardPartialWithRelationsSchema } from './KanBanCardSchema.js';
import { KanbanWithRelationsSchema } from './KanbanSchema.js';
import { KanbanPartialWithRelationsSchema } from './KanbanSchema.js';
/////////////////////////////////////////
// KAN BAN LIST SCHEMA
/////////////////////////////////////////
export const KanBanListSchema = z.object({
    id: z.number().int(),
    indexWithinBoard: z.number().int(),
    title: z.string().nullable(),
    boardId: z.number().int().nullable(),
});
/////////////////////////////////////////
// KAN BAN LIST PARTIAL SCHEMA
/////////////////////////////////////////
export const KanBanListPartialSchema = KanBanListSchema.partial();
export const KanBanListWithRelationsSchema = KanBanListSchema.merge(z.object({
    cards: z.lazy(() => KanBanCardWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanWithRelationsSchema).nullable(),
}));
export const KanBanListPartialWithRelationsSchema = KanBanListPartialSchema.merge(z.object({
    cards: z.lazy(() => KanBanCardPartialWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
})).partial();
export const KanBanListWithPartialRelationsSchema = KanBanListSchema.merge(z.object({
    cards: z.lazy(() => KanBanCardPartialWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
}).partial());
export default KanBanListSchema;
