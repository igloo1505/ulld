import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const IpynbUpdatecitationsListOrderInputSchema: z.ZodType<Prisma.IpynbUpdatecitationsListOrderInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();
export default IpynbUpdatecitationsListOrderInputSchema;