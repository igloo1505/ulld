import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanCardSelectSchema.js
..//inputTypeSchemas/KanBanCardIncludeSchema.js
export const KanBanCardArgsSchema: z.ZodType<Prisma.KanBanCardDefaultArgs> = z.object({
  select: z.lazy(() => KanBanCardSelectSchema).optional(),
  include: z.lazy(() => KanBanCardIncludeSchema).optional(),
}).strict();
export default KanBanCardArgsSchema;