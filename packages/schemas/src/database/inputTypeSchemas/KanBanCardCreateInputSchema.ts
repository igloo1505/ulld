import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListCreateNestedOneWithoutCardsInputSchema } from './KanBanListCreateNestedOneWithoutCardsInputSchema';

export const KanBanCardCreateInputSchema: z.ZodType<Prisma.KanBanCardCreateInput> = z.object({
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable(),
  KanBanList: z.lazy(() => KanBanListCreateNestedOneWithoutCardsInputSchema).optional()
}).strict();

export default KanBanCardCreateInputSchema;
