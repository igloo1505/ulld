import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { IpynbCountOutputTypeSelectSchema } from './IpynbCountOutputTypeSelectSchema.js';
export const IpynbCountOutputTypeArgsSchema: z.ZodType<Prisma.IpynbCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => IpynbCountOutputTypeSelectSchema).nullish(),
}).strict();
export default IpynbCountOutputTypeSelectSchema;