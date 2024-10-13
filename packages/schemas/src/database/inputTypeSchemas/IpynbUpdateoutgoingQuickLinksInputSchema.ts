import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const IpynbUpdateoutgoingQuickLinksInputSchema: z.ZodType<Prisma.IpynbUpdateoutgoingQuickLinksInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();
export default IpynbUpdateoutgoingQuickLinksInputSchema;