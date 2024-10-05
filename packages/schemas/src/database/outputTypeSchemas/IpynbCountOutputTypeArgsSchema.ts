import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IpynbCountOutputTypeSelectSchema } from './IpynbCountOutputTypeSelectSchema';

export const IpynbCountOutputTypeArgsSchema: z.ZodType<Prisma.IpynbCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => IpynbCountOutputTypeSelectSchema).nullish(),
}).strict();

export default IpynbCountOutputTypeSelectSchema;
