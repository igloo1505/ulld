import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WhiteboardCreateManyInputSchema: z.ZodType<Prisma.WhiteboardCreateManyInput> = z.object({
  id: z.string(),
  data: z.instanceof(Buffer)
}).strict();

export default WhiteboardCreateManyInputSchema;
