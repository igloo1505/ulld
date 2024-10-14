import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbCreateWithoutCitationsInputSchema } from './IpynbCreateWithoutCitationsInputSchema';
import { IpynbUncheckedCreateWithoutCitationsInputSchema } from './IpynbUncheckedCreateWithoutCitationsInputSchema';

export const IpynbCreateOrConnectWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbCreateOrConnectWithoutCitationsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IpynbCreateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutCitationsInputSchema) ]),
}).strict();

export default IpynbCreateOrConnectWithoutCitationsInputSchema;
