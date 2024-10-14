import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IpynbUpdateoutgoingQuickLinksInputSchema: z.ZodType<Prisma.IpynbUpdateoutgoingQuickLinksInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export default IpynbUpdateoutgoingQuickLinksInputSchema;
