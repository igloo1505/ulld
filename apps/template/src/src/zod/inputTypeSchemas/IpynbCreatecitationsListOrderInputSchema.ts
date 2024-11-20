import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IpynbCreatecitationsListOrderInputSchema: z.ZodType<Prisma.IpynbCreatecitationsListOrderInput> = z.object({
  set: z.string().array()
}).strict();

export default IpynbCreatecitationsListOrderInputSchema;
