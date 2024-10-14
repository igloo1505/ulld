import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const KanBanCardCreateManyKanBanListInputSchema: z.ZodType<Prisma.KanBanCardCreateManyKanBanListInput> = z.object({
  id: z.number().int().optional(),
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable()
}).strict();

export default KanBanCardCreateManyKanBanListInputSchema;
