import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateWithoutCitationsInputSchema } from './IpynbCreateWithoutCitationsInputSchema';
import { IpynbUncheckedCreateWithoutCitationsInputSchema } from './IpynbUncheckedCreateWithoutCitationsInputSchema';
import { IpynbCreateOrConnectWithoutCitationsInputSchema } from './IpynbCreateOrConnectWithoutCitationsInputSchema';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';

export const IpynbCreateNestedManyWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbCreateNestedManyWithoutCitationsInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutCitationsInputSchema),z.lazy(() => IpynbCreateWithoutCitationsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutCitationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutCitationsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutCitationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default IpynbCreateNestedManyWithoutCitationsInputSchema;
