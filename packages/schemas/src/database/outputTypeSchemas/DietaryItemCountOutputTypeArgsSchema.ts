import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DietaryItemCountOutputTypeSelectSchema } from '../DietaryItemCountOutputTypeSelectSchema.js';
export const DietaryItemCountOutputTypeArgsSchema: z.ZodType<Prisma.DietaryItemCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DietaryItemCountOutputTypeSelectSchema).nullish(),
}).strict();
export default DietaryItemCountOutputTypeSelectSchema;