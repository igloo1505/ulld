import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { MdxNoteUpdateManyMutationInputSchema } from '../inputTypeSchemas/MdxNoteUpdateManyMutationInputSchema.js'
import { MdxNoteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MdxNoteUncheckedUpdateManyInputSchema.js'
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema.js'
export const MdxNoteUpdateManyArgsSchema: z.ZodType<Prisma.MdxNoteUpdateManyArgs> = z.object({
  data: z.union([ MdxNoteUpdateManyMutationInputSchema,MdxNoteUncheckedUpdateManyInputSchema ]),
  where: MdxNoteWhereInputSchema.optional(),
}).strict() ;
export default MdxNoteUpdateManyArgsSchema;