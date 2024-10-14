import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const WhiteboardSelectSchema: z.ZodType<Prisma.WhiteboardSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()

export default WhiteboardSelectSchema;
