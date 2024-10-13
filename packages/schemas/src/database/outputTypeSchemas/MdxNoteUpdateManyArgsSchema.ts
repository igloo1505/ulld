import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/MdxNoteUpdateManyMutationInputSchema.js
..//inputTypeSchemas/MdxNoteUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/MdxNoteWhereInputSchema.js
export const MdxNoteUpdateManyArgsSchema: z.ZodType<Prisma.MdxNoteUpdateManyArgs> = z.object({
  data: z.union([ MdxNoteUpdateManyMutationInputSchema,MdxNoteUncheckedUpdateManyInputSchema ]),
  where: MdxNoteWhereInputSchema.optional(),
}).strict() ;
export default MdxNoteUpdateManyArgsSchema;