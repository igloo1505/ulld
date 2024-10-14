import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutTopicsInputSchema } from './IpynbUpdateWithoutTopicsInputSchema';
import { IpynbUncheckedUpdateWithoutTopicsInputSchema } from './IpynbUncheckedUpdateWithoutTopicsInputSchema';
import { IpynbCreateWithoutTopicsInputSchema } from './IpynbCreateWithoutTopicsInputSchema';
import { IpynbUncheckedCreateWithoutTopicsInputSchema } from './IpynbUncheckedCreateWithoutTopicsInputSchema';

export const IpynbUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default IpynbUpsertWithWhereUniqueWithoutTopicsInputSchema;
