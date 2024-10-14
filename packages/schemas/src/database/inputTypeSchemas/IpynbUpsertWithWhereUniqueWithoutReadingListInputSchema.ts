import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutReadingListInputSchema } from './IpynbUpdateWithoutReadingListInputSchema';
import { IpynbUncheckedUpdateWithoutReadingListInputSchema } from './IpynbUncheckedUpdateWithoutReadingListInputSchema';
import { IpynbCreateWithoutReadingListInputSchema } from './IpynbCreateWithoutReadingListInputSchema';
import { IpynbUncheckedCreateWithoutReadingListInputSchema } from './IpynbUncheckedCreateWithoutReadingListInputSchema';

export const IpynbUpsertWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutReadingListInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutReadingListInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutReadingListInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutReadingListInputSchema) ]),
}).strict();

export default IpynbUpsertWithWhereUniqueWithoutReadingListInputSchema;
