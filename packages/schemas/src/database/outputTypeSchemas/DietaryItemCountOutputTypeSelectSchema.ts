import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DietaryItemCountOutputTypeSelectSchema: z.ZodType<Prisma.DietaryItemCountOutputTypeSelect> = z.object({
  Diet: z.boolean().optional(),
  Serving: z.boolean().optional(),
}).strict();

export default DietaryItemCountOutputTypeSelectSchema;
