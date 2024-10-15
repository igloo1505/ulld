import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbCreateWithoutTagsInputSchema } from './IpynbCreateWithoutTagsInputSchema.js';
import { IpynbUncheckedCreateWithoutTagsInputSchema } from './IpynbUncheckedCreateWithoutTagsInputSchema.js';
export const IpynbCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.IpynbCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IpynbCreateWithoutTagsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default IpynbCreateOrConnectWithoutTagsInputSchema;