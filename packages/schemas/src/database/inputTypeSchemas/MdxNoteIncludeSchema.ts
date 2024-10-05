import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { SequentialNoteListArgsSchema } from "../outputTypeSchemas/SequentialNoteListArgsSchema"
import { ReadingListFindManyArgsSchema } from "../outputTypeSchemas/ReadingListFindManyArgsSchema"
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema"
import { DefinitionFindManyArgsSchema } from "../outputTypeSchemas/DefinitionFindManyArgsSchema"
import { ToDoFindManyArgsSchema } from "../outputTypeSchemas/ToDoFindManyArgsSchema"
import { MdxNoteCountOutputTypeArgsSchema } from "../outputTypeSchemas/MdxNoteCountOutputTypeArgsSchema"

export const MdxNoteIncludeSchema: z.ZodType<Prisma.MdxNoteInclude> = z.object({
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  citations: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  sequentialList: z.union([z.boolean(),z.lazy(() => SequentialNoteListArgsSchema)]).optional(),
  ReadingList: z.union([z.boolean(),z.lazy(() => ReadingListFindManyArgsSchema)]).optional(),
  equations: z.union([z.boolean(),z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  definitions: z.union([z.boolean(),z.lazy(() => DefinitionFindManyArgsSchema)]).optional(),
  toDo: z.union([z.boolean(),z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MdxNoteCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default MdxNoteIncludeSchema;
