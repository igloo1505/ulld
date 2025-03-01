import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SequentialNoteListIncludeSchema } from '../inputTypeSchemas/SequentialNoteListIncludeSchema.js'
import { SequentialNoteListCreateInputSchema } from '../inputTypeSchemas/SequentialNoteListCreateInputSchema.js'
import { SequentialNoteListUncheckedCreateInputSchema } from '../inputTypeSchemas/SequentialNoteListUncheckedCreateInputSchema.js'
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { IpynbFindManyArgsSchema } from "../outputTypeSchemas/IpynbFindManyArgsSchema"
import { SequentialNoteListCountOutputTypeArgsSchema } from "../outputTypeSchemas/SequentialNoteListCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SequentialNoteListSelectSchema: z.ZodType<Prisma.SequentialNoteListSelect> = z.object({
  sequentialKey: z.boolean().optional(),
  MdxNote: z.union([z.boolean(),z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: z.union([z.boolean(),z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SequentialNoteListCountOutputTypeArgsSchema)]).optional(),
}).strict()
export const SequentialNoteListCreateArgsSchema: z.ZodType<Prisma.SequentialNoteListCreateArgs> = z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: SequentialNoteListIncludeSchema.optional(),
  data: z.union([ SequentialNoteListCreateInputSchema,SequentialNoteListUncheckedCreateInputSchema ]),
}).strict() ;
export default SequentialNoteListCreateArgsSchema;