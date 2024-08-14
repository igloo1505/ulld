import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IpynbSelectSchema } from '../inputTypeSchemas/IpynbSelectSchema';
import { IpynbIncludeSchema } from '../inputTypeSchemas/IpynbIncludeSchema';

export const IpynbArgsSchema: z.ZodType<Prisma.IpynbDefaultArgs> = z.object({
  select: z.lazy(() => IpynbSelectSchema).optional(),
  include: z.lazy(() => IpynbIncludeSchema).optional(),
}).strict();

export default IpynbArgsSchema;
