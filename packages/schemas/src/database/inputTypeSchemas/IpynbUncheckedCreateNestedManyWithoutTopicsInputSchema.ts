import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateWithoutTopicsInputSchema } from './IpynbCreateWithoutTopicsInputSchema';
import { IpynbUncheckedCreateWithoutTopicsInputSchema } from './IpynbUncheckedCreateWithoutTopicsInputSchema';
import { IpynbCreateOrConnectWithoutTopicsInputSchema } from './IpynbCreateOrConnectWithoutTopicsInputSchema';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';

export const IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbUncheckedCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutTopicsInputSchema),z.lazy(() => IpynbCreateWithoutTopicsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema;
