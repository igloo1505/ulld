import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanListCreateManyInputSchema.js
export const KanBanListCreateManyArgsSchema: z.ZodType<Prisma.KanBanListCreateManyArgs> = z.object({
  data: z.union([ KanBanListCreateManyInputSchema,KanBanListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default KanBanListCreateManyArgsSchema;