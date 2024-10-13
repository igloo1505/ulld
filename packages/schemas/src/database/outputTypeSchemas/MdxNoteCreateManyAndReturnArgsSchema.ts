import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/MdxNoteCreateManyInputSchema.js
export const MdxNoteCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MdxNoteCreateManyAndReturnArgs> = z.object({
  data: z.union([ MdxNoteCreateManyInputSchema,MdxNoteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default MdxNoteCreateManyAndReturnArgsSchema;