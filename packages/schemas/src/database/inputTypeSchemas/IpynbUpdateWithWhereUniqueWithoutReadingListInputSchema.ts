import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutReadingListInputSchema } from './IpynbUpdateWithoutReadingListInputSchema';
import { IpynbUncheckedUpdateWithoutReadingListInputSchema } from './IpynbUncheckedUpdateWithoutReadingListInputSchema';

export const IpynbUpdateWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.IpynbUpdateWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateWithoutReadingListInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutReadingListInputSchema) ]),
}).strict();

export default IpynbUpdateWithWhereUniqueWithoutReadingListInputSchema;
