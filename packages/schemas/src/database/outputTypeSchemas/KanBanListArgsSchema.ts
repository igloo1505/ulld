import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanListSelectSchema.js
..//inputTypeSchemas/KanBanListIncludeSchema.js
export const KanBanListArgsSchema: z.ZodType<Prisma.KanBanListDefaultArgs> = z.object({
  select: z.lazy(() => KanBanListSelectSchema).optional(),
  include: z.lazy(() => KanBanListIncludeSchema).optional(),
}).strict();
export default KanBanListArgsSchema;