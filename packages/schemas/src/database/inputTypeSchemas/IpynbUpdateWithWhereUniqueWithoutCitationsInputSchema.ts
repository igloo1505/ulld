import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutCitationsInputSchema } from './IpynbUpdateWithoutCitationsInputSchema';
import { IpynbUncheckedUpdateWithoutCitationsInputSchema } from './IpynbUncheckedUpdateWithoutCitationsInputSchema';

export const IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbUpdateWithWhereUniqueWithoutCitationsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutCitationsInputSchema) ]),
}).strict();

export default IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema;
