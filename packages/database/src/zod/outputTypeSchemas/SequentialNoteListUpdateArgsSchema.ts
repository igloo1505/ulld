import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SequentialNoteListIncludeSchema } from '../inputTypeSchemas/SequentialNoteListIncludeSchema'
import { SequentialNoteListUpdateInputSchema } from '../inputTypeSchemas/SequentialNoteListUpdateInputSchema'
import { SequentialNoteListUncheckedUpdateInputSchema } from '../inputTypeSchemas/SequentialNoteListUncheckedUpdateInputSchema'
import { SequentialNoteListWhereUniqueInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereUniqueInputSchema'
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

export const SequentialNoteListUpdateArgsSchema: z.ZodType<Prisma.SequentialNoteListUpdateArgs> = z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: SequentialNoteListIncludeSchema.optional(),
  data: z.union([ SequentialNoteListUpdateInputSchema,SequentialNoteListUncheckedUpdateInputSchema ]),
  where: SequentialNoteListWhereUniqueInputSchema,
}).strict() ;

export default SequentialNoteListUpdateArgsSchema;
