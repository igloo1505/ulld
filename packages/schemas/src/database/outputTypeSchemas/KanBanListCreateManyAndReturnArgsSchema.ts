import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListCreateManyInputSchema } from '../inputTypeSchemas/KanBanListCreateManyInputSchema'

export const KanBanListCreateManyAndReturnArgsSchema: z.ZodType<Prisma.KanBanListCreateManyAndReturnArgs> = z.object({
  data: z.union([ KanBanListCreateManyInputSchema,KanBanListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default KanBanListCreateManyAndReturnArgsSchema;
