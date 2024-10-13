import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanCardCreateManyInputSchema.js
export const KanBanCardCreateManyArgsSchema: z.ZodType<Prisma.KanBanCardCreateManyArgs> = z.object({
  data: z.union([ KanBanCardCreateManyInputSchema,KanBanCardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default KanBanCardCreateManyArgsSchema;