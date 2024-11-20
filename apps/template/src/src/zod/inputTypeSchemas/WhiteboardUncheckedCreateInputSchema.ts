import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WhiteboardUncheckedCreateInputSchema: z.ZodType<Prisma.WhiteboardUncheckedCreateInput> = z.object({
  id: z.string(),
  data: z.instanceof(Buffer)
}).strict();

export default WhiteboardUncheckedCreateInputSchema;
