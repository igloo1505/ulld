import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateWithoutReadingListInputSchema } from './IpynbCreateWithoutReadingListInputSchema';
import { IpynbUncheckedCreateWithoutReadingListInputSchema } from './IpynbUncheckedCreateWithoutReadingListInputSchema';
import { IpynbCreateOrConnectWithoutReadingListInputSchema } from './IpynbCreateOrConnectWithoutReadingListInputSchema';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';

export const IpynbCreateNestedManyWithoutReadingListInputSchema: z.ZodType<Prisma.IpynbCreateNestedManyWithoutReadingListInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutReadingListInputSchema),z.lazy(() => IpynbCreateWithoutReadingListInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutReadingListInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutReadingListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutReadingListInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutReadingListInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default IpynbCreateNestedManyWithoutReadingListInputSchema;
