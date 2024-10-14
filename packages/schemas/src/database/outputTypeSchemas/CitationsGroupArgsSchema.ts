import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupSelectSchema } from '../inputTypeSchemas/CitationsGroupSelectSchema';
import { CitationsGroupIncludeSchema } from '../inputTypeSchemas/CitationsGroupIncludeSchema';

export const CitationsGroupArgsSchema: z.ZodType<Prisma.CitationsGroupDefaultArgs> = z.object({
  select: z.lazy(() => CitationsGroupSelectSchema).optional(),
  include: z.lazy(() => CitationsGroupIncludeSchema).optional(),
}).strict();

export default CitationsGroupArgsSchema;
