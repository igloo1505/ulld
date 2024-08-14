import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IpynbCreateimportantValuesInputSchema: z.ZodType<Prisma.IpynbCreateimportantValuesInput> = z.object({
  set: z.number().array()
}).strict();

export default IpynbCreateimportantValuesInputSchema;
