import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const IpynbCreatecitationsListOrderInputSchema: z.ZodType<Prisma.IpynbCreatecitationsListOrderInput> = z.object({
  set: z.string().array()
}).strict();
export default IpynbCreatecitationsListOrderInputSchema;