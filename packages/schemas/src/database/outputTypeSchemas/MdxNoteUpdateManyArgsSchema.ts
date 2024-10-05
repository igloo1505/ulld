import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MdxNoteUpdateManyMutationInputSchema } from '../inputTypeSchemas/MdxNoteUpdateManyMutationInputSchema'
import { MdxNoteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MdxNoteUncheckedUpdateManyInputSchema'
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema'

export const MdxNoteUpdateManyArgsSchema: z.ZodType<Prisma.MdxNoteUpdateManyArgs> = z.object({
  data: z.union([ MdxNoteUpdateManyMutationInputSchema,MdxNoteUncheckedUpdateManyInputSchema ]),
  where: MdxNoteWhereInputSchema.optional(),
}).strict() ;

export default MdxNoteUpdateManyArgsSchema;
