import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanBanListSelectSchema } from '../inputTypeSchemas/KanBanListSelectSchema.js';
import { KanBanListIncludeSchema } from '../inputTypeSchemas/KanBanListIncludeSchema.js';
export const KanBanListArgsSchema: z.ZodType<Prisma.KanBanListDefaultArgs> = z.object({
  select: z.lazy(() => KanBanListSelectSchema).optional(),
  include: z.lazy(() => KanBanListIncludeSchema).optional(),
}).strict();
export default KanBanListArgsSchema;