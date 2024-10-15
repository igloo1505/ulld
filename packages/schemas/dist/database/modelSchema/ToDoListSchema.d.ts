import { z } from 'zod';
import type { ToDoWithRelations } from './ToDoSchema.js';
import type { ToDoPartialWithRelations } from './ToDoSchema.js';
import type { TagWithRelations } from './TagSchema.js';
import type { TagPartialWithRelations } from './TagSchema.js';
import type { TopicWithRelations } from './TopicSchema.js';
import type { TopicPartialWithRelations } from './TopicSchema.js';
import type { SubjectWithRelations } from './SubjectSchema.js';
import type { SubjectPartialWithRelations } from './SubjectSchema.js';
export declare const ToDoListSchema: z.ZodObject<{
    id: z.ZodNumber;
    label: z.ZodString;
    createdAt: z.ZodDate;
    lastUpdate: z.ZodDate;
    lastAccess: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    lastAccess: Date;
    id: number;
    createdAt: Date;
    lastUpdate: Date;
    label: string;
}, {
    lastAccess: Date;
    id: number;
    createdAt: Date;
    lastUpdate: Date;
    label: string;
}>;
export type ToDoList = z.infer<typeof ToDoListSchema>;
export declare const ToDoListPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    label: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
    lastUpdate: z.ZodOptional<z.ZodDate>;
    lastAccess: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    lastAccess?: Date | undefined;
    id?: number | undefined;
    createdAt?: Date | undefined;
    lastUpdate?: Date | undefined;
    label?: string | undefined;
}, {
    lastAccess?: Date | undefined;
    id?: number | undefined;
    createdAt?: Date | undefined;
    lastUpdate?: Date | undefined;
    label?: string | undefined;
}>;
export type ToDoListPartial = z.infer<typeof ToDoListPartialSchema>;
export type ToDoListRelations = {
    tasks: ToDoWithRelations[];
    tags: TagWithRelations[];
    topics: TopicWithRelations[];
    subjects: SubjectWithRelations[];
};
export type ToDoListWithRelations = z.infer<typeof ToDoListSchema> & ToDoListRelations;
export declare const ToDoListWithRelationsSchema: z.ZodType<ToDoListWithRelations>;
export type ToDoListPartialRelations = {
    tasks?: ToDoPartialWithRelations[];
    tags?: TagPartialWithRelations[];
    topics?: TopicPartialWithRelations[];
    subjects?: SubjectPartialWithRelations[];
};
export type ToDoListPartialWithRelations = z.infer<typeof ToDoListPartialSchema> & ToDoListPartialRelations;
export declare const ToDoListPartialWithRelationsSchema: z.ZodType<ToDoListPartialWithRelations>;
export type ToDoListWithPartialRelations = z.infer<typeof ToDoListSchema> & ToDoListPartialRelations;
export declare const ToDoListWithPartialRelationsSchema: z.ZodType<ToDoListWithPartialRelations>;
export default ToDoListSchema;
//# sourceMappingURL=ToDoListSchema.d.ts.map