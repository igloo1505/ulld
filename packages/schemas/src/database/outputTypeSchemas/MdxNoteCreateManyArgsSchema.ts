import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/MdxNoteCreateManyInputSchema.js
export const MdxNoteCreateManyArgsSchema: z.ZodType<Prisma.MdxNoteCreateManyArgs> = z.object({
  data: z.union([ MdxNoteCreateManyInputSchema,MdxNoteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default MdxNoteCreateManyArgsSchema;