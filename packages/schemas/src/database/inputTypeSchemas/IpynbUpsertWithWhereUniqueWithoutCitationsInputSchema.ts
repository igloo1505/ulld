import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutCitationsInputSchema } from './IpynbUpdateWithoutCitationsInputSchema';
import { IpynbUncheckedUpdateWithoutCitationsInputSchema } from './IpynbUncheckedUpdateWithoutCitationsInputSchema';
import { IpynbCreateWithoutCitationsInputSchema } from './IpynbCreateWithoutCitationsInputSchema';
import { IpynbUncheckedCreateWithoutCitationsInputSchema } from './IpynbUncheckedCreateWithoutCitationsInputSchema';

export const IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutCitationsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutCitationsInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutCitationsInputSchema) ]),
}).strict();

export default IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema;
