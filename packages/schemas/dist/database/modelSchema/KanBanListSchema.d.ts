import { z } from 'zod';
import type { KanBanCardWithRelations } from './KanBanCardSchema.js';
import type { KanBanCardPartialWithRelations } from './KanBanCardSchema.js';
import type { KanbanWithRelations } from './KanbanSchema.js';
import type { KanbanPartialWithRelations } from './KanbanSchema.js';
export declare const KanBanListSchema: z.ZodObject<{
    id: z.ZodNumber;
    indexWithinBoard: z.ZodNumber;
    title: z.ZodNullable<z.ZodString>;
    boardId: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: number;
    title: string | null;
    indexWithinBoard: number;
    boardId: number | null;
}, {
    id: number;
    title: string | null;
    indexWithinBoard: number;
    boardId: number | null;
}>;
export type KanBanList = z.infer<typeof KanBanListSchema>;
export declare const KanBanListPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    indexWithinBoard: z.ZodOptional<z.ZodNumber>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    boardId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    title?: string | null | undefined;
    indexWithinBoard?: number | undefined;
    boardId?: number | null | undefined;
}, {
    id?: number | undefined;
    title?: string | null | undefined;
    indexWithinBoard?: number | undefined;
    boardId?: number | null | undefined;
}>;
export type KanBanListPartial = z.infer<typeof KanBanListPartialSchema>;
export type KanBanListRelations = {
    cards: KanBanCardWithRelations[];
    Kanban?: KanbanWithRelations | null;
};
export type KanBanListWithRelations = z.infer<typeof KanBanListSchema> & KanBanListRelations;
export declare const KanBanListWithRelationsSchema: z.ZodType<KanBanListWithRelations>;
export type KanBanListPartialRelations = {
    cards?: KanBanCardPartialWithRelations[];
    Kanban?: KanbanPartialWithRelations | null;
};
export type KanBanListPartialWithRelations = z.infer<typeof KanBanListPartialSchema> & KanBanListPartialRelations;
export declare const KanBanListPartialWithRelationsSchema: z.ZodType<KanBanListPartialWithRelations>;
export type KanBanListWithPartialRelations = z.infer<typeof KanBanListSchema> & KanBanListPartialRelations;
export declare const KanBanListWithPartialRelationsSchema: z.ZodType<KanBanListWithPartialRelations>;
export default KanBanListSchema;
//# sourceMappingURL=KanBanListSchema.d.ts.map