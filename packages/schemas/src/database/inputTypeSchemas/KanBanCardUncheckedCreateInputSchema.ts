import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const KanBanCardUncheckedCreateInputSchema: z.ZodType<Prisma.KanBanCardUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  listId: z.number().int().optional().nullable(),
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable()
}).strict();

export default KanBanCardUncheckedCreateInputSchema;
