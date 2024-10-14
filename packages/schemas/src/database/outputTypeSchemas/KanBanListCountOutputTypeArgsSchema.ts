import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListCountOutputTypeSelectSchema } from './KanBanListCountOutputTypeSelectSchema';

export const KanBanListCountOutputTypeArgsSchema: z.ZodType<Prisma.KanBanListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => KanBanListCountOutputTypeSelectSchema).nullish(),
}).strict();

export default KanBanListCountOutputTypeSelectSchema;
