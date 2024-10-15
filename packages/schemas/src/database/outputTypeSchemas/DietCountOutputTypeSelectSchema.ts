import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const DietCountOutputTypeSelectSchema: z.ZodType<Prisma.DietCountOutputTypeSelect> = z.object({
  items: z.boolean().optional(),
  periodsFollowed: z.boolean().optional(),
  HealthReport: z.boolean().optional(),
}).strict();
export default DietCountOutputTypeSelectSchema;