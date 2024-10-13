import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanListCreateManyInputSchema.js
export const KanBanListCreateManyAndReturnArgsSchema: z.ZodType<Prisma.KanBanListCreateManyAndReturnArgs> = z.object({
  data: z.union([ KanBanListCreateManyInputSchema,KanBanListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default KanBanListCreateManyAndReturnArgsSchema;