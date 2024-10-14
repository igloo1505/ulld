import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListArgsSchema } from "../outputTypeSchemas/KanBanListArgsSchema"

export const KanBanCardIncludeSchema: z.ZodType<Prisma.KanBanCardInclude> = z.object({
  KanBanList: z.union([z.boolean(),z.lazy(() => KanBanListArgsSchema)]).optional(),
}).strict()

export default KanBanCardIncludeSchema;
