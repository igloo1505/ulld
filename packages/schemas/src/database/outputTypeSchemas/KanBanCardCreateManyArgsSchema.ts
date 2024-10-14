import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanCardCreateManyInputSchema } from '../inputTypeSchemas/KanBanCardCreateManyInputSchema'

export const KanBanCardCreateManyArgsSchema: z.ZodType<Prisma.KanBanCardCreateManyArgs> = z.object({
  data: z.union([ KanBanCardCreateManyInputSchema,KanBanCardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default KanBanCardCreateManyArgsSchema;
