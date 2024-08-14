import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbCreateWithoutTopicsInputSchema } from './IpynbCreateWithoutTopicsInputSchema';
import { IpynbUncheckedCreateWithoutTopicsInputSchema } from './IpynbUncheckedCreateWithoutTopicsInputSchema';

export const IpynbCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IpynbCreateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default IpynbCreateOrConnectWithoutTopicsInputSchema;
