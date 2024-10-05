import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietCountOutputTypeSelectSchema } from './DietCountOutputTypeSelectSchema';

export const DietCountOutputTypeArgsSchema: z.ZodType<Prisma.DietCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DietCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DietCountOutputTypeSelectSchema;
