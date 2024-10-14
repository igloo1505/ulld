import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanCardSelectSchema } from '../inputTypeSchemas/KanBanCardSelectSchema';
import { KanBanCardIncludeSchema } from '../inputTypeSchemas/KanBanCardIncludeSchema';

export const KanBanCardArgsSchema: z.ZodType<Prisma.KanBanCardDefaultArgs> = z.object({
  select: z.lazy(() => KanBanCardSelectSchema).optional(),
  include: z.lazy(() => KanBanCardIncludeSchema).optional(),
}).strict();

export default KanBanCardArgsSchema;
