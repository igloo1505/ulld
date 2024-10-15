import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema.js';
import type { MdxNotePartialWithRelations } from './MdxNoteSchema.js';
import type { BibEntryWithRelations } from './BibEntrySchema.js';
import type { BibEntryPartialWithRelations } from './BibEntrySchema.js';
import type { IpynbWithRelations } from './IpynbSchema.js';
import type { IpynbPartialWithRelations } from './IpynbSchema.js';
import type { QAPairWithRelations } from './QAPairSchema.js';
import type { QAPairPartialWithRelations } from './QAPairSchema.js';
import type { PracticeExamWithRelations } from './PracticeExamSchema.js';
import type { PracticeExamPartialWithRelations } from './PracticeExamSchema.js';
import type { EquationWithRelations } from './EquationSchema.js';
import type { EquationPartialWithRelations } from './EquationSchema.js';
import type { ToDoWithRelations } from './ToDoSchema.js';
import type { ToDoPartialWithRelations } from './ToDoSchema.js';
import type { KanbanWithRelations } from './KanbanSchema.js';
import type { KanbanPartialWithRelations } from './KanbanSchema.js';
import type { ToDoListWithRelations } from './ToDoListSchema.js';
import type { ToDoListPartialWithRelations } from './ToDoListSchema.js';
export declare const TagSchema: z.ZodObject<{
    value: z.ZodString;
    kanbanId: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodDate;
    lastAccess: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    value: string;
    lastAccess: Date;
    createdAt: Date;
    kanbanId: number | null;
}, {
    value: string;
    lastAccess: Date;
    createdAt: Date;
    kanbanId: number | null;
}>;
export type Tag = z.infer<typeof TagSchema>;
export declare const TagPartialSchema: z.ZodObject<{
    value: z.ZodOptional<z.ZodString>;
    kanbanId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    lastAccess: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    value?: string | undefined;
    lastAccess?: Date | undefined;
    createdAt?: Date | undefined;
    kanbanId?: number | null | undefined;
}, {
    value?: string | undefined;
    lastAccess?: Date | undefined;
    createdAt?: Date | undefined;
    kanbanId?: number | null | undefined;
}>;
export type TagPartial = z.infer<typeof TagPartialSchema>;
export type TagRelations = {
    MdxNotes: MdxNoteWithRelations[];
    bibEntries: BibEntryWithRelations[];
    ipynbNotes: IpynbWithRelations[];
    QAPair: QAPairWithRelations[];
    practiceExam: PracticeExamWithRelations[];
    equations: EquationWithRelations[];
    toDo: ToDoWithRelations[];
    Kanban?: KanbanWithRelations | null;
    todoList: ToDoListWithRelations[];
};
export type TagWithRelations = z.infer<typeof TagSchema> & TagRelations;
export declare const TagWithRelationsSchema: z.ZodType<TagWithRelations>;
export type TagPartialRelations = {
    MdxNotes?: MdxNotePartialWithRelations[];
    bibEntries?: BibEntryPartialWithRelations[];
    ipynbNotes?: IpynbPartialWithRelations[];
    QAPair?: QAPairPartialWithRelations[];
    practiceExam?: PracticeExamPartialWithRelations[];
    equations?: EquationPartialWithRelations[];
    toDo?: ToDoPartialWithRelations[];
    Kanban?: KanbanPartialWithRelations | null;
    todoList?: ToDoListPartialWithRelations[];
};
export type TagPartialWithRelations = z.infer<typeof TagPartialSchema> & TagPartialRelations;
export declare const TagPartialWithRelationsSchema: z.ZodType<TagPartialWithRelations>;
export type TagWithPartialRelations = z.infer<typeof TagSchema> & TagPartialRelations;
export declare const TagWithPartialRelationsSchema: z.ZodType<TagWithPartialRelations>;
export default TagSchema;
//# sourceMappingURL=TagSchema.d.ts.map