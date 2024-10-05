import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IpynbCreateoutgoingQuickLinksInputSchema: z.ZodType<Prisma.IpynbCreateoutgoingQuickLinksInput> = z.object({
  set: z.string().array()
}).strict();

export default IpynbCreateoutgoingQuickLinksInputSchema;
