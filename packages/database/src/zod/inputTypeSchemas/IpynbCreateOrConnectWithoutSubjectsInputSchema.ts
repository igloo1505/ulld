import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbCreateWithoutSubjectsInputSchema } from './IpynbCreateWithoutSubjectsInputSchema';
import { IpynbUncheckedCreateWithoutSubjectsInputSchema } from './IpynbUncheckedCreateWithoutSubjectsInputSchema';

export const IpynbCreateOrConnectWithoutSubjectsInputSchema: z.ZodType<Prisma.IpynbCreateOrConnectWithoutSubjectsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IpynbCreateWithoutSubjectsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default IpynbCreateOrConnectWithoutSubjectsInputSchema;
