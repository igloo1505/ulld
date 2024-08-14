import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemCountOutputTypeSelectSchema } from './DietaryItemCountOutputTypeSelectSchema';

export const DietaryItemCountOutputTypeArgsSchema: z.ZodType<Prisma.DietaryItemCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DietaryItemCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DietaryItemCountOutputTypeSelectSchema;
