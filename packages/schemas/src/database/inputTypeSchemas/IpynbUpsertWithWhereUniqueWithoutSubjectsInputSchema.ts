import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutSubjectsInputSchema } from './IpynbUpdateWithoutSubjectsInputSchema';
import { IpynbUncheckedUpdateWithoutSubjectsInputSchema } from './IpynbUncheckedUpdateWithoutSubjectsInputSchema';
import { IpynbCreateWithoutSubjectsInputSchema } from './IpynbCreateWithoutSubjectsInputSchema';
import { IpynbUncheckedCreateWithoutSubjectsInputSchema } from './IpynbUncheckedCreateWithoutSubjectsInputSchema';

export const IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutSubjectsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutSubjectsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema;
