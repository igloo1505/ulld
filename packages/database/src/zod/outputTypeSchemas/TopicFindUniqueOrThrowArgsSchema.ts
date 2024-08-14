import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicIncludeSchema } from '../inputTypeSchemas/TopicIncludeSchema'
import { TopicWhereUniqueInputSchema } from '../inputTypeSchemas/TopicWhereUniqueInputSchema'
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { IpynbFindManyArgsSchema } from "../outputTypeSchemas/IpynbFindManyArgsSchema"
import { QAPairFindManyArgsSchema } from "../outputTypeSchemas/QAPairFindManyArgsSchema"
import { PracticeExamFindManyArgsSchema } from "../outputTypeSchemas/PracticeExamFindManyArgsSchema"
import { ToDoFindManyArgsSchema } from "../outputTypeSchemas/ToDoFindManyArgsSchema"
import { KanbanArgsSchema } from "../outputTypeSchemas/KanbanArgsSchema"
import { ToDoListFindManyArgsSchema } from "../outputTypeSchemas/ToDoListFindManyArgsSchema"
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema"
import { TopicCountOutputTypeArgsSchema } from "../outputTypeSchemas/TopicCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TopicSelectSchema: z.ZodType<Prisma.TopicSelect> = z.object({
  value: z.boolean().optional(),
  kanbanId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  MdxNotes: z.union([z.boolean(),z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: z.union([z.boolean(),z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  QAPair: z.union([z.boolean(),z.lazy(() => QAPairFindManyArgsSchema)]).optional(),
  practiceExam: z.union([z.boolean(),z.lazy(() => PracticeExamFindManyArgsSchema)]).optional(),
  toDo: z.union([z.boolean(),z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  Kanban: z.union([z.boolean(),z.lazy(() => KanbanArgsSchema)]).optional(),
  todoList: z.union([z.boolean(),z.lazy(() => ToDoListFindManyArgsSchema)]).optional(),
  bibEntries: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  equations: z.union([z.boolean(),z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TopicCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TopicFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TopicFindUniqueOrThrowArgs> = z.object({
  select: TopicSelectSchema.optional(),
  include: TopicIncludeSchema.optional(),
  where: TopicWhereUniqueInputSchema,
}).strict() ;

export default TopicFindUniqueOrThrowArgsSchema;
