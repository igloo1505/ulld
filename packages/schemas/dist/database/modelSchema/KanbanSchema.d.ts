import { z } from 'zod';
import type { KanBanListWithRelations } from './KanBanListSchema.js';
import type { KanBanListPartialWithRelations } from './KanBanListSchema.js';
import type { TagWithRelations } from './TagSchema.js';
import type { TagPartialWithRelations } from './TagSchema.js';
import type { SubjectWithRelations } from './SubjectSchema.js';
import type { SubjectPartialWithRelations } from './SubjectSchema.js';
import type { TopicWithRelations } from './TopicSchema.js';
import type { TopicPartialWithRelations } from './TopicSchema.js';
export declare const KanbanSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    createdAt: z.ZodDate;
    lastUpdate: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    lastUpdate: Date;
    title: string;
}, {
    id: number;
    createdAt: Date;
    lastUpdate: Date;
    title: string;
}>;
export type Kanban = z.infer<typeof KanbanSchema>;
export declare const KanbanPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    title: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
    lastUpdate: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    createdAt?: Date | undefined;
    lastUpdate?: Date | undefined;
    title?: string | undefined;
}, {
    id?: number | undefined;
    createdAt?: Date | undefined;
    lastUpdate?: Date | undefined;
    title?: string | undefined;
}>;
export type KanbanPartial = z.infer<typeof KanbanPartialSchema>;
export type KanbanRelations = {
    lists: KanBanListWithRelations[];
    tags: TagWithRelations[];
    subjects: SubjectWithRelations[];
    topics: TopicWithRelations[];
};
export type KanbanWithRelations = z.infer<typeof KanbanSchema> & KanbanRelations;
export declare const KanbanWithRelationsSchema: z.ZodType<KanbanWithRelations>;
export type KanbanPartialRelations = {
    lists?: KanBanListPartialWithRelations[];
    tags?: TagPartialWithRelations[];
    subjects?: SubjectPartialWithRelations[];
    topics?: TopicPartialWithRelations[];
};
export type KanbanPartialWithRelations = z.infer<typeof KanbanPartialSchema> & KanbanPartialRelations;
export declare const KanbanPartialWithRelationsSchema: z.ZodType<KanbanPartialWithRelations>;
export type KanbanWithPartialRelations = z.infer<typeof KanbanSchema> & KanbanPartialRelations;
export declare const KanbanWithPartialRelationsSchema: z.ZodType<KanbanWithPartialRelations>;
export default KanbanSchema;
//# sourceMappingURL=KanbanSchema.d.ts.map