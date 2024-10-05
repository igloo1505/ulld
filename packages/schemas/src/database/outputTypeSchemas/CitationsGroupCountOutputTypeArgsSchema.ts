import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupCountOutputTypeSelectSchema } from './CitationsGroupCountOutputTypeSelectSchema';

export const CitationsGroupCountOutputTypeArgsSchema: z.ZodType<Prisma.CitationsGroupCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CitationsGroupCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CitationsGroupCountOutputTypeSelectSchema;
