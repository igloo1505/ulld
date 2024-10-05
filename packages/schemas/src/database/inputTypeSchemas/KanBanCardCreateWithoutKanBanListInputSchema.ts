import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const KanBanCardCreateWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardCreateWithoutKanBanListInput> = z.object({
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable()
}).strict();

export default KanBanCardCreateWithoutKanBanListInputSchema;
