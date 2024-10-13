import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const KanBanListCountOutputTypeSelectSchema: z.ZodType<Prisma.KanBanListCountOutputTypeSelect> = z.object({
  cards: z.boolean().optional(),
}).strict();
export default KanBanListCountOutputTypeSelectSchema;