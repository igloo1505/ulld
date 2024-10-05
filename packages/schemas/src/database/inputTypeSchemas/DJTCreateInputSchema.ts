import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DJTCreateInputSchema: z.ZodType<Prisma.DJTCreateInput> = z.object({
  type: z.string(),
  data: z.instanceof(Buffer)
}).strict();

export default DJTCreateInputSchema;
