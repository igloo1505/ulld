import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectIncludeSchema } from '../inputTypeSchemas/SubjectIncludeSchema'
import { SubjectWhereUniqueInputSchema } from '../inputTypeSchemas/SubjectWhereUniqueInputSchema'
import { SubjectCreateInputSchema } from '../inputTypeSchemas/SubjectCreateInputSchema'
import { SubjectUncheckedCreateInputSchema } from '../inputTypeSchemas/SubjectUncheckedCreateInputSchema'
import { SubjectUpdateInputSchema } from '../inputTypeSchemas/SubjectUpdateInputSchema'
import { SubjectUncheckedUpdateInputSchema } from '../inputTypeSchemas/SubjectUncheckedUpdateInputSchema'
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { IpynbFindManyArgsSchema } from "../outputTypeSchemas/IpynbFindManyArgsSchema"
import { QAPairFindManyArgsSchema } from "../outputTypeSchemas/QAPairFindManyArgsSchema"
import { PracticeExamFindManyArgsSchema } from "../outputTypeSchemas/PracticeExamFindManyArgsSchema"
import { KanbanArgsSchema } from "../outputTypeSchemas/KanbanArgsSchema"
import { ToDoListFindManyArgsSchema } from "../outputTypeSchemas/ToDoListFindManyArgsSchema"
import { ToDoFindManyArgsSchema } from "../outputTypeSchemas/ToDoFindManyArgsSchema"
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema"
import { SubjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/SubjectCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubjectSelectSchema: z.ZodType<Prisma.SubjectSelect> = z.object({
  value: z.boolean().optional(),
  kanbanId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  MdxNotes: z.union([z.boolean(),z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  IpynbNotes: z.union([z.boolean(),z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  QaPair: z.union([z.boolean(),z.lazy(() => QAPairFindManyArgsSchema)]).optional(),
  practiceExam: z.union([z.boolean(),z.lazy(() => PracticeExamFindManyArgsSchema)]).optional(),
  Kanban: z.union([z.boolean(),z.lazy(() => KanbanArgsSchema)]).optional(),
  todoList: z.union([z.boolean(),z.lazy(() => ToDoListFindManyArgsSchema)]).optional(),
  toDo: z.union([z.boolean(),z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  bibEntries: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  equations: z.union([z.boolean(),z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SubjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SubjectUpsertArgsSchema: z.ZodType<Prisma.SubjectUpsertArgs> = z.object({
  select: SubjectSelectSchema.optional(),
  include: SubjectIncludeSchema.optional(),
  where: SubjectWhereUniqueInputSchema,
  create: z.union([ SubjectCreateInputSchema,SubjectUncheckedCreateInputSchema ]),
  update: z.union([ SubjectUpdateInputSchema,SubjectUncheckedUpdateInputSchema ]),
}).strict() ;

export default SubjectUpsertArgsSchema;
