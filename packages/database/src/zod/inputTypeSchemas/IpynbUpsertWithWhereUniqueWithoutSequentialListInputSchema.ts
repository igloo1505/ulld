import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutSequentialListInputSchema } from './IpynbUpdateWithoutSequentialListInputSchema';
import { IpynbUncheckedUpdateWithoutSequentialListInputSchema } from './IpynbUncheckedUpdateWithoutSequentialListInputSchema';
import { IpynbCreateWithoutSequentialListInputSchema } from './IpynbCreateWithoutSequentialListInputSchema';
import { IpynbUncheckedCreateWithoutSequentialListInputSchema } from './IpynbUncheckedCreateWithoutSequentialListInputSchema';

export const IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutSequentialListInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutSequentialListInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutSequentialListInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutSequentialListInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSequentialListInputSchema) ]),
}).strict();

export default IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema;
