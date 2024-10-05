import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DJTUncheckedCreateInputSchema: z.ZodType<Prisma.DJTUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  type: z.string(),
  data: z.instanceof(Buffer)
}).strict();

export default DJTUncheckedCreateInputSchema;
