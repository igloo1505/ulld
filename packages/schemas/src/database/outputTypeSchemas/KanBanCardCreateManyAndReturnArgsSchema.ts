import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanCardCreateManyInputSchema.js
export const KanBanCardCreateManyAndReturnArgsSchema: z.ZodType<Prisma.KanBanCardCreateManyAndReturnArgs> = z.object({
  data: z.union([ KanBanCardCreateManyInputSchema,KanBanCardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default KanBanCardCreateManyAndReturnArgsSchema;