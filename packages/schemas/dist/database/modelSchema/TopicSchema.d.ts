import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema.js';
import type { MdxNotePartialWithRelations } from './MdxNoteSchema.js';
import type { IpynbWithRelations } from './IpynbSchema.js';
import type { IpynbPartialWithRelations } from './IpynbSchema.js';
import type { QAPairWithRelations } from './QAPairSchema.js';
import type { QAPairPartialWithRelations } from './QAPairSchema.js';
import type { PracticeExamWithRelations } from './PracticeExamSchema.js';
import type { PracticeExamPartialWithRelations } from './PracticeExamSchema.js';
import type { ToDoWithRelations } from './ToDoSchema.js';
import type { ToDoPartialWithRelations } from './ToDoSchema.js';
import type { KanbanWithRelations } from './KanbanSchema.js';
import type { KanbanPartialWithRelations } from './KanbanSchema.js';
import type { ToDoListWithRelations } from './ToDoListSchema.js';
import type { ToDoListPartialWithRelations } from './ToDoListSchema.js';
import type { BibEntryWithRelations } from './BibEntrySchema.js';
import type { BibEntryPartialWithRelations } from './BibEntrySchema.js';
import type { EquationWithRelations } from './EquationSchema.js';
import type { EquationPartialWithRelations } from './EquationSchema.js';
export declare const TopicSchema: z.ZodObject<{
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
export type Topic = z.infer<typeof TopicSchema>;
export declare const TopicPartialSchema: z.ZodObject<{
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
export type TopicPartial = z.infer<typeof TopicPartialSchema>;
export type TopicRelations = {
    MdxNotes: MdxNoteWithRelations[];
    ipynbNotes: IpynbWithRelations[];
    QAPair: QAPairWithRelations[];
    practiceExam: PracticeExamWithRelations[];
    toDo: ToDoWithRelations[];
    Kanban?: KanbanWithRelations | null;
    todoList: ToDoListWithRelations[];
    bibEntries: BibEntryWithRelations[];
    equations: EquationWithRelations[];
};
export type TopicWithRelations = z.infer<typeof TopicSchema> & TopicRelations;
export declare const TopicWithRelationsSchema: z.ZodType<TopicWithRelations>;
export type TopicPartialRelations = {
    MdxNotes?: MdxNotePartialWithRelations[];
    ipynbNotes?: IpynbPartialWithRelations[];
    QAPair?: QAPairPartialWithRelations[];
    practiceExam?: PracticeExamPartialWithRelations[];
    toDo?: ToDoPartialWithRelations[];
    Kanban?: KanbanPartialWithRelations | null;
    todoList?: ToDoListPartialWithRelations[];
    bibEntries?: BibEntryPartialWithRelations[];
    equations?: EquationPartialWithRelations[];
};
export type TopicPartialWithRelations = z.infer<typeof TopicPartialSchema> & TopicPartialRelations;
export declare const TopicPartialWithRelationsSchema: z.ZodType<TopicPartialWithRelations>;
export type TopicWithPartialRelations = z.infer<typeof TopicSchema> & TopicPartialRelations;
export declare const TopicWithPartialRelationsSchema: z.ZodType<TopicWithPartialRelations>;
export default TopicSchema;
//# sourceMappingURL=TopicSchema.d.ts.map