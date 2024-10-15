import { z } from 'zod';
import type { KanBanListWithRelations } from './KanBanListSchema.js';
import type { KanBanListPartialWithRelations } from './KanBanListSchema.js';
export declare const KanBanCardSchema: z.ZodObject<{
    id: z.ZodNumber;
    listId: z.ZodNullable<z.ZodNumber>;
    indexWithinList: z.ZodNumber;
    label: z.ZodNullable<z.ZodString>;
    details: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: number;
    label: string | null;
    details: string | null;
    listId: number | null;
    indexWithinList: number;
}, {
    id: number;
    label: string | null;
    details: string | null;
    listId: number | null;
    indexWithinList: number;
}>;
export type KanBanCard = z.infer<typeof KanBanCardSchema>;
export declare const KanBanCardPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    listId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    indexWithinList: z.ZodOptional<z.ZodNumber>;
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    details: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    label?: string | null | undefined;
    details?: string | null | undefined;
    listId?: number | null | undefined;
    indexWithinList?: number | undefined;
}, {
    id?: number | undefined;
    label?: string | null | undefined;
    details?: string | null | undefined;
    listId?: number | null | undefined;
    indexWithinList?: number | undefined;
}>;
export type KanBanCardPartial = z.infer<typeof KanBanCardPartialSchema>;
export type KanBanCardRelations = {
    KanBanList?: KanBanListWithRelations | null;
};
export type KanBanCardWithRelations = z.infer<typeof KanBanCardSchema> & KanBanCardRelations;
export declare const KanBanCardWithRelationsSchema: z.ZodType<KanBanCardWithRelations>;
export type KanBanCardPartialRelations = {
    KanBanList?: KanBanListPartialWithRelations | null;
};
export type KanBanCardPartialWithRelations = z.infer<typeof KanBanCardPartialSchema> & KanBanCardPartialRelations;
export declare const KanBanCardPartialWithRelationsSchema: z.ZodType<KanBanCardPartialWithRelations>;
export type KanBanCardWithPartialRelations = z.infer<typeof KanBanCardSchema> & KanBanCardPartialRelations;
export declare const KanBanCardWithPartialRelationsSchema: z.ZodType<KanBanCardWithPartialRelations>;
export default KanBanCardSchema;
//# sourceMappingURL=KanBanCardSchema.d.ts.map