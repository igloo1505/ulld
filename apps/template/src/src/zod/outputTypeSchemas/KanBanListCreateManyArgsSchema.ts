import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListCreateManyInputSchema } from '../inputTypeSchemas/KanBanListCreateManyInputSchema'

export const KanBanListCreateManyArgsSchema: z.ZodType<Prisma.KanBanListCreateManyArgs> = z.object({
  data: z.union([ KanBanListCreateManyInputSchema,KanBanListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default KanBanListCreateManyArgsSchema;
