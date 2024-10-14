import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const KanBanListCountOutputTypeSelectSchema: z.ZodType<Prisma.KanBanListCountOutputTypeSelect> = z.object({
  cards: z.boolean().optional(),
}).strict();

export default KanBanListCountOutputTypeSelectSchema;
