import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutSequentialListInputSchema } from './IpynbUpdateWithoutSequentialListInputSchema';
import { IpynbUncheckedUpdateWithoutSequentialListInputSchema } from './IpynbUncheckedUpdateWithoutSequentialListInputSchema';

export const IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema: z.ZodType<Prisma.IpynbUpdateWithWhereUniqueWithoutSequentialListInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateWithoutSequentialListInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutSequentialListInputSchema) ]),
}).strict();

export default IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema;
