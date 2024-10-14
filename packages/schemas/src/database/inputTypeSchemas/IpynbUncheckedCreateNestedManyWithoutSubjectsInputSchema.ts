import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateWithoutSubjectsInputSchema } from './IpynbCreateWithoutSubjectsInputSchema';
import { IpynbUncheckedCreateWithoutSubjectsInputSchema } from './IpynbUncheckedCreateWithoutSubjectsInputSchema';
import { IpynbCreateOrConnectWithoutSubjectsInputSchema } from './IpynbCreateOrConnectWithoutSubjectsInputSchema';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';

export const IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.IpynbUncheckedCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutSubjectsInputSchema),z.lazy(() => IpynbCreateWithoutSubjectsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema;
