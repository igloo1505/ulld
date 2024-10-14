import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MdxNoteCreateManyInputSchema } from '../inputTypeSchemas/MdxNoteCreateManyInputSchema'

export const MdxNoteCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MdxNoteCreateManyAndReturnArgs> = z.object({
  data: z.union([ MdxNoteCreateManyInputSchema,MdxNoteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MdxNoteCreateManyAndReturnArgsSchema;
