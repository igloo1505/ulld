import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListSelectSchema } from '../inputTypeSchemas/KanBanListSelectSchema';
import { KanBanListIncludeSchema } from '../inputTypeSchemas/KanBanListIncludeSchema';

export const KanBanListArgsSchema: z.ZodType<Prisma.KanBanListDefaultArgs> = z.object({
  select: z.lazy(() => KanBanListSelectSchema).optional(),
  include: z.lazy(() => KanBanListIncludeSchema).optional(),
}).strict();

export default KanBanListArgsSchema;
