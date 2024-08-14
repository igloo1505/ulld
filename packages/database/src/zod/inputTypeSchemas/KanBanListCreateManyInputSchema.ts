import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const KanBanListCreateManyInputSchema: z.ZodType<Prisma.KanBanListCreateManyInput> = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  boardId: z.number().int().optional().nullable()
}).strict();

export default KanBanListCreateManyInputSchema;
