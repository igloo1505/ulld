import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietSelectSchema } from '../inputTypeSchemas/DietSelectSchema';
import { DietIncludeSchema } from '../inputTypeSchemas/DietIncludeSchema';

export const DietArgsSchema: z.ZodType<Prisma.DietDefaultArgs> = z.object({
  select: z.lazy(() => DietSelectSchema).optional(),
  include: z.lazy(() => DietIncludeSchema).optional(),
}).strict();

export default DietArgsSchema;
