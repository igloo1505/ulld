import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbCreateWithoutReadingListInputSchema } from './IpynbCreateWithoutReadingListInputSchema';
import { IpynbUncheckedCreateWithoutReadingListInputSchema } from './IpynbUncheckedCreateWithoutReadingListInputSchema';

export const IpynbCreateOrConnectWithoutReadingListInputSchema: z.ZodType<Prisma.IpynbCreateOrConnectWithoutReadingListInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IpynbCreateWithoutReadingListInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutReadingListInputSchema) ]),
}).strict();

export default IpynbCreateOrConnectWithoutReadingListInputSchema;
