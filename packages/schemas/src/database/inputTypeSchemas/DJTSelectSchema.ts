import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()

export default DJTSelectSchema;