import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutSubjectsInputSchema } from './IpynbUpdateWithoutSubjectsInputSchema';
import { IpynbUncheckedUpdateWithoutSubjectsInputSchema } from './IpynbUncheckedUpdateWithoutSubjectsInputSchema';

export const IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.IpynbUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateWithoutSubjectsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();

export default IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema;
