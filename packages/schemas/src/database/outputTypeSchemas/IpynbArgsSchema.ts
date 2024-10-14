import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { IpynbSelectSchema } from '../inputTypeSchemas/IpynbSelectSchema.js';
import { IpynbIncludeSchema } from '../inputTypeSchemas/IpynbIncludeSchema.js';
export const IpynbArgsSchema: z.ZodType<Prisma.IpynbDefaultArgs> = z.object({
  select: z.lazy(() => IpynbSelectSchema).optional(),
  include: z.lazy(() => IpynbIncludeSchema).optional(),
}).strict();
export default IpynbArgsSchema;