import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateWithoutSequentialListInputSchema } from './IpynbCreateWithoutSequentialListInputSchema';
import { IpynbUncheckedCreateWithoutSequentialListInputSchema } from './IpynbUncheckedCreateWithoutSequentialListInputSchema';
import { IpynbCreateOrConnectWithoutSequentialListInputSchema } from './IpynbCreateOrConnectWithoutSequentialListInputSchema';
import { IpynbCreateManySequentialListInputEnvelopeSchema } from './IpynbCreateManySequentialListInputEnvelopeSchema';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';

export const IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema: z.ZodType<Prisma.IpynbUncheckedCreateNestedManyWithoutSequentialListInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutSequentialListInputSchema),z.lazy(() => IpynbCreateWithoutSequentialListInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutSequentialListInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSequentialListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutSequentialListInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutSequentialListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IpynbCreateManySequentialListInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema;
