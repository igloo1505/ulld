import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DJTCreateManyInputSchema: z.ZodType<Prisma.DJTCreateManyInput> = z.object({
  id: z.number().int().optional(),
  type: z.string(),
  data: z.instanceof(Buffer)
}).strict();

export default DJTCreateManyInputSchema;
