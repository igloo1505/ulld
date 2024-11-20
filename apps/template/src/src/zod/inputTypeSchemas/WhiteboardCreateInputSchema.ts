import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WhiteboardCreateInputSchema: z.ZodType<Prisma.WhiteboardCreateInput> = z.object({
  id: z.string(),
  data: z.instanceof(Buffer)
}).strict();

export default WhiteboardCreateInputSchema;
