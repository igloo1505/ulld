import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema.js';
import type { MdxNotePartialWithRelations } from './MdxNoteSchema.js';
import type { IpynbWithRelations } from './IpynbSchema.js';
import type { IpynbPartialWithRelations } from './IpynbSchema.js';
import type { QAPairWithRelations } from './QAPairSchema.js';
import type { QAPairPartialWithRelations } from './QAPairSchema.js';
import type { PracticeExamWithRelations } from './PracticeExamSchema.js';
import type { PracticeExamPartialWithRelations } from './PracticeExamSchema.js';
import type { KanbanWithRelations } from './KanbanSchema.js';
import type { KanbanPartialWithRelations } from './KanbanSchema.js';
import type { ToDoListWithRelations } from './ToDoListSchema.js';
import type { ToDoListPartialWithRelations } from './ToDoListSchema.js';
import type { ToDoWithRelations } from './ToDoSchema.js';
import type { ToDoPartialWithRelations } from './ToDoSchema.js';
import type { BibEntryWithRelations } from './BibEntrySchema.js';
import type { BibEntryPartialWithRelations } from './BibEntrySchema.js';
import type { EquationWithRelations } from './EquationSchema.js';
import type { EquationPartialWithRelations } from './EquationSchema.js';
export declare const SubjectSchema: z.ZodObject<{
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
export type Subject = z.infer<typeof SubjectSchema>;
export declare const SubjectPartialSchema: z.ZodObject<{
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
export type SubjectPartial = z.infer<typeof SubjectPartialSchema>;
export type SubjectRelations = {
    MdxNotes: MdxNoteWithRelations[];
    IpynbNotes: IpynbWithRelations[];
    QaPair: QAPairWithRelations[];
    practiceExam: PracticeExamWithRelations[];
    Kanban?: KanbanWithRelations | null;
    todoList: ToDoListWithRelations[];
    toDo: ToDoWithRelations[];
    bibEntries: BibEntryWithRelations[];
    equations: EquationWithRelations[];
};
export type SubjectWithRelations = z.infer<typeof SubjectSchema> & SubjectRelations;
export declare const SubjectWithRelationsSchema: z.ZodType<SubjectWithRelations>;
export type SubjectPartialRelations = {
    MdxNotes?: MdxNotePartialWithRelations[];
    IpynbNotes?: IpynbPartialWithRelations[];
    QaPair?: QAPairPartialWithRelations[];
    practiceExam?: PracticeExamPartialWithRelations[];
    Kanban?: KanbanPartialWithRelations | null;
    todoList?: ToDoListPartialWithRelations[];
    toDo?: ToDoPartialWithRelations[];
    bibEntries?: BibEntryPartialWithRelations[];
    equations?: EquationPartialWithRelations[];
};
export type SubjectPartialWithRelations = z.infer<typeof SubjectPartialSchema> & SubjectPartialRelations;
export declare const SubjectPartialWithRelationsSchema: z.ZodType<SubjectPartialWithRelations>;
export type SubjectWithPartialRelations = z.infer<typeof SubjectSchema> & SubjectPartialRelations;
export declare const SubjectWithPartialRelationsSchema: z.ZodType<SubjectWithPartialRelations>;
export default SubjectSchema;
//# sourceMappingURL=SubjectSchema.d.ts.map